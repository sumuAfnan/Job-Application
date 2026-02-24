// counter guli k dhore const (namguli) te rekhe dilam jate next a value change korte  pari
const totalC = document.getElementById("totalC");
const interViewC = document.getElementById("interViewC");
const rejectC = document.getElementById("rejectC");
const availableC = document.getElementById("availableC");

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