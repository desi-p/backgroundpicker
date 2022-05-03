document.getElementById('mountains').onclick = randomMountainPic
document.getElementById('lakes').onclick = randomLakePic
document.getElementById('roads').onclick = randomRoadPic
document.getElementById('valleys').onclick = randomValleyPic
document.getElementById('animals').onclick = randomAnimalPic

let lakeImagesArray = ['img/Lakes/acadia_nanda-firdaus-_CZRd9eDmUM-unsplash.jpg',
'img/Lakes/glacier_joshua-woroniecki-KVQr_axQUlY-unsplash.jpg',
'img/Lakes/glacier_vasu-pendyala-vNrx1pBP-tk-unsplash.jpg',
'img/Lakes/joshuatee_frank-zhang-wwCFZ-0LO6s-unsplash.jpg',
'img/Lakes/mthood_sarah-ardin-LvTuU-MWoaw-unsplash.jpg',
'img/Lakes/yellowstone_mariola-grobelska-HGPlr2ybKCQ-unsplash.jpg'
];

let usedLakeImages = {};
let usedLakeImagesCount = 0;

function randomLakePic(){
  let ranLakePic = Math.floor(Math.random() * lakeImagesArray.length);
  if (!usedLakeImages[ranLakePic]){
    document.body.background = lakeImagesArray[ranLakePic];
    document.querySelector('img').style.display = "none";
    usedLakeImages[ranLakePic] = true;
    usedLakeImagesCount++;
    if (usedLakeImagesCount === lakeImagesArray.length){
      usedLakeImagesCount = 0;
      usedLakeImages = {};
    }
  }else{
    ranLakePic();
  }
};

let roadImagesArray = ['img/Roads/glacier_kelly-repreza-7c44R7CTUpc-unsplash.jpg',
'img/Roads/glacier_parth-upadhyay-TrjbfpYsNbo-unsplash.jpg',
'img/Roads/joshuatree_manda-hansen-3DFISCtFcv4-unsplash.jpg',
'img/Roads/rainier_kieran-taylor-cdNicnt4neE-unsplash.jpg',
'img/Roads/shenondoah)mike-von-oCNoVSW5Fv0-unsplash.jpg',
'img/Roads/yosemite_pj-gal-szabo-YnG53mStGdQ-unsplash.jpg',
'img/Roads/zion_jt-BZ1WCgPBp1Q-unsplash.jpg',
]

let usedRoadImages = {};
let usedRoadImagesCount = 0;

function randomRoadPic(){
  let ranRoadPic = Math.floor(Math.random() * roadImagesArray.length);
  if (!usedRoadImages[ranRoadPic]){
    document.body.background = roadImagesArray[ranRoadPic];
    document.querySelector('img').style.display = "none";

    usedRoadImages[ranRoadPic] = true;
    usedRoadImagesCount++;
    if (usedRoadImagesCount === roadImagesArray.length){
      usedRoadImagesCount = 0;
      usedRoadImages = {};
    }
  }else{
    ranRoadPic();
  }
};

let valleyImagesArray = ['img/Valleys/arches_ben-stiefel-dr8rfmGCmPM-unsplash.jpg',
'img/Valleys/brycecanyon_stephen-roth-bpF_1jFZgqE-unsplash.jpg',
'img/Valleys/capreef_brynn-pedrick-P2qxwaLg438-unsplash.jpg',
'img/Valleys/denali_josh-mccausland-cCuh-U_g1JA-unsplash.jpg',
'img/Valleys/horseshoe_ben-turnbull-M7ZTkK5JdnM-unsplash.jpg',
'img/Valleys/zion_alek-newton-moj9Lydvhzk-unsplash.jpg'
];

let usedValleyImages = {};
let usedValleyImagesCount = 0;

function randomValleyPic(){
  let ranValleyPic = Math.floor(Math.random() * valleyImagesArray.length);
  if (!usedValleyImages[ranValleyPic]){
    document.body.background = valleyImagesArray[ranValleyPic];
    document.querySelector('img').style.display = "none";
    usedValleyImages[ranValleyPic] = true;
    usedValleyImagesCount++;
    if(usedValleyImagesCount === valleyImagesArray.length){
      usedValleyImages = {};
      usedValleyImagesCount = 0;
    }
  }else{
    ranValleyPic();
  }
};

let animalImagesArray = ['img/Animals/capreef_brynn-pedrick-SwHg_fLU8JQ-unsplash.jpg', 
'img/Animals/denali_john-peters-3URF84zpDDg-unsplash.jpg', 
'img/Animals/grandteton_vincent-ledvina-wxR7z-pSGEw-unsplash.jpg', 
'img/Animals/redwood_y-s-KvgpZ1f-XHE-unsplash.jpg',
'img/Animals/redwood_y-s-LMZO-BlBrDs-unsplash.jpg',
'img/Animals/rm_steve-adams-nm82hyEMAMM-unsplash.jpg',
'img/Animals/voyagers)tim-umphreys-s7ZABNRG2bw-unsplash.jpg'
];

let usedAnimalImages = {};
let usedAnimalImagesCount = 0;

function randomAnimalPic(){
  let randomAnPic = Math.floor(Math.random() * animalImagesArray.length);
  if (!usedAnimalImages[randomAnPic]){
    document.body.background = animalImagesArray[randomAnPic];
    document.querySelector('img').style.display = "none";

    usedAnimalImages[randomAnPic] = true;
    usedAnimalImagesCount++;
    if (usedAnimalImagesCount === animalImagesArray.length){
      usedAnimalImagesCount = 0;
      usedAnimalImages = {};
    }
  }else{
    randomAnimalPic();
  }
};

let mountainImagesArray = ['img/mountains/denali_stephen-meyers-U43H95kjhog-unsplash.jpg', 
  'img/mountains/glacier_ryan-stone-jGs0ZH-_INs-unsplash.jpg', 
  'img/mountains/glacierdeidre-schwartz-dRarhitLjbk-unsplash.jpg',
  'img/mountains/greatsanddunes_colin-lloyd-rM-rzoHusAU-unsplash.jpg',
  'img/mountains/smokeys_ivana-cajina-HDd-NQ_AMNQ-unsplash.jpg',
  'img/mountains/yosemite_joss-woodhead-iw-ZLHwf7SQ-unsplash.jpg'
];

let usedMtnImages = {};
let usedMtnImagesCount = 0;

function randomMountainPic() {
  let randomMtnPic = Math.floor(Math.random() * mountainImagesArray.length);
  if (!usedMtnImages[randomMtnPic]){
    document.body.background = mountainImagesArray[randomMtnPic];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.querySelector('img').style.display = "none";

    usedMtnImages[randomMtnPic] = true;
    usedMtnImagesCount++;
    if (usedMtnImagesCount === mountainImagesArray.length){
      usedMtnImagesCount = 0;
      usedMtnImages = {};
    }
  }else{
    randomMountainPic();
  }
};
