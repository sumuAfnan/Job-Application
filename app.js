// counter guli k dhore const (namguli) te rekhe dilam jate next a value change korte  pari
const totalC = document.getElementById("totalC");
const interViewC = document.getElementById("interViewC");
const rejectC = document.getElementById("rejectC");
const availableC = document.getElementById("availableC");
let currentFilter = 'all';
// button guli k dhore const (namguli) te rakhlam jate pore click kore kaaj korate pari
const allBtn = document.getElementById("allBtn");
const interViewBtn = document.getElementById("interViewBtn");
const rejectBtn = document.getElementById("rejectBtn");

// hidden card tak dhore emtystate a rekhe dici , jate pore kaaj korte pari
const emptyState = document.getElementById("emptyState");

//button click korle status change hobe
function changeStatus(button, status) {
  const card = button.closest('[data-info-status]');  // jekhane data-info-status ace oita khuje card a rakhlam

  const prevStatus = card.getAttribute('data-info-status');  
  //check  kori not-applied kina status
  if(prevStatus === status){
    status = 'not-applied';
  }

  card.setAttribute('data-info-status', status);  //click er pore je status hoice oita data-info-status a dici

  //update korlam badgestatus
  const badgeStatus = card.querySelector('h3');
  if(status === 'interview'){
    badgeStatus.textContent = "INTERVIEW";
    badgeStatus.className = "inline-block bg-[#D1FAE5] px-[12px] py-[8px] text-[#065F46] mt-[20px] text-[14px] font-medium rounded";
  } else if(status === 'rejected'){
  badgeStatus.textContent = "REJECTED";
    badgeStatus.className = "inline-block bg-[#FEE2E2] px-[12px] py-[8px] text-[#991B1B] mt-[20px] text-[14px] font-medium rounded";
  } else {
    badgeStatus.textContent = "NOT APPLIED";
   badgeStatus.className = "inline-block bg-[#EEF4FF] px-[12px] py-[8px] text-[#002C5C] mt-[20px] text-[14px] font-medium rounded";
  }
//function call  korbo counter update korte and filter apply korte
  updateCounters();
  applyFilter(currentFilter);
}
//counter update korlam
function updateCounters() {
  const jobCards = document.querySelectorAll('[data-info-status]');
  let total = jobCards.length;
  let interview = 0;
  let rejected = 0;

  jobCards.forEach(card => {
    const status = card.getAttribute('data-info-status');
    if(status === 'interview') interview++;
    else if(status === 'rejected') rejected++;
  });

  totalC.textContent = total;
  interViewC.textContent = interview;
  rejectC.textContent = rejected;
  availableC.textContent = total;
}


//all, interview, reject button swich korle  card dakha ba na dakha
function applyFilter(filter) {
  currentFilter = filter;
  const jobCards = document.querySelectorAll('[data-info-status]');
  let visibleCount = 0;

  jobCards.forEach(card => {
    const status = card.getAttribute('data-info-status');
    let show = false;

    if(filter === 'all') show = true;
    else if(filter === 'interview') show = status === 'interview';
    else if(filter === 'rejected') show = status === 'rejected';

    card.style.display = show ? 'block' : 'none';
    if(show) visibleCount++;
  });

  emptyState.classList.toggle('hidden', visibleCount > 0);

//tab button highlight korlam ternery diye
   allBtn.className = filter==='all' ? 'bg-[#3B82F6] text-[#FFFFFF] px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded' : 'border-2 border-[#F1F2F4] bg-[#FFFFFF] text-[#64748B] px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded';
  interViewBtn.className = filter==='interview' ? 'bg-[#3B82F6] text-[#FFFFFF] px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded' : 'border-2 border-[#F1F2F4] bg-[#FFFFFF] text-[#64748B] px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded';
  rejectBtn.className = filter==='rejected' ? 'bg-[#3B82F6] text-[#FFFFFF] px-[30px] sm:px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded' : 'border-2 border-[#F1F2F4] bg-[#FFFFFF] text-[#64748B] px-[32px] py-[10px] text-[12px] mt-[24px] font-semibold rounded';
}
//kon tab a kon card dakhabe
 allBtn.addEventListener('click', () => applyFilter('all'));
interViewBtn.addEventListener('click', () => applyFilter('interview'));
rejectBtn.addEventListener('click', () => applyFilter('rejected'));

// card delet
document.addEventListener('click', e => {
  if(e.target.matches("img[src*='Trash']")) {
    const card = e.target.closest('[data-info-status]');
    if(card){
      card.remove();
      updateCounters();
      applyFilter(currentFilter);
    }
  }
});
