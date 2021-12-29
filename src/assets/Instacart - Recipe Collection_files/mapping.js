var load_lb = load_lb || !isLBLoaded;
profileID = '';


/*
switch(lbHost) {
  case 'abc.com' :
  	profileID = 'lbexample'
  break;

  case 'def.com,other' :
  	profileID = 'advertiser name'
  break;

  case 'somedomain.com' :
  	profileID = 'somedomain'
  break;

  case 'ford.com' :
  	profileID = 'somedomain'
  break;

  default:
	  profileID = 'default'
}

lbTag.load()
*/


/* Active Domains - BEGIN */

if (lbHost == 'dhl.com') { profileID = 'dhl';}

if ((lbHost == 'brita.tw') || (lbHost == 'crm.brita.tw')) { profileID = 'brita'; }

if (lbHost == 'sisley-paris.com') { profileID = 'sisley'; }

if ((lbHost == 'sg.puma.com') || (lbHost == 'my.puma.com')) { profileID = 'puma'; }

if (lbHost == 'aia.co.th') { profileID = 'aia-th'; }

if (lbHost == 'shop.scotchthailand.co.th') { profileID = 'scotch-th'; }

if (lbHost == 'subaru.asia') { profileID = 'subaru'; }

if ((lbHost == 'sony.com.vn') || (lbHost == 'promotion.sony.com.vn')) { profileID = 'sony-vn'; }

if ((lbHost == 'anlene.com') || (lbHost == 'kiemtracoxuongkhop.com') || (lbHost == 'anmum.com')) { profileID = 'fonterra-vn'; }

if (lbHost == 'tmrwbyuob.com') { profileID = 'tmrwbyuob-th'; }

if (lbHost == 'suss.edu.sg') { profileID = 'suss-sg'; }

if (lbHost == 'sabeco.com.vn') { profileID = 'sabeco-vn'; }

if (lbHost == 'tal.sg') { profileID = 'tafep-sg'; }

if (lbHost == 'medtronicdiabetes.com') { profileID = 'medtronicdiabetes'; }


if ((lbHost == 'kennyrogersdelivery.com.ph') || (lbHost == 'merchant-portal.booky.ph') || (lbHost == 'cornerpizza.com.ph')) { profileID = 'kennyrogers'; }

if (lbHost == 'mazda.co.th') { profileID = 'mazda-th'; }



if (lbHost.indexOf('celcom.com.my') != -1) { profileID = 'celcom-my'; }

if ((lbHost.indexOf('us.no7beauty.com') != -1) || (lbHost == 'attach.mikmak.tv')) { profileID = 'boots'; }





/* Active Domains - END */

/* Blocked Domains - BEGIN */

if (lbHost.indexOf('ritzcarlton') != -1) { profileID = 'default'; }
if (lbHost.indexOf('marriott') != -1) { profileID = 'default'; }
if (lbHost.indexOf('meetingsimagined') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nbc.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nbcuni.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nbcsports') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nbcnews') != -1) { profileID = 'default'; }
if (lbHost.indexOf('eonline.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('esquire.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('oxygen.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('usanetworks.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('syfy.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('focusfeatures') != -1) { profileID = 'default'; }
if (lbHost.indexOf('today.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nordstrom') != -1) { profileID = 'default'; }
if (lbHost.indexOf('hautelook') != -1) { profileID = 'default'; }
if (lbHost.indexOf('trunkclub') != -1) { profileID = 'default'; }
if (lbHost.indexOf('rotoworld') != -1) { profileID = 'default'; }
if (lbHost.indexOf('teenvogue.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('golfchannel.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('strayer.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('strayeruniversity.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('adt.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('directgeneral.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('fiftyshadesmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('trainwreckmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('voteloving.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('insidiouschapter3.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('krampusthefilm.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('londonhasfallen.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('ouijamovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('ridealong.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('jurassicworldmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('whoismrrobot.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('despicable.me') != -1) { profileID = 'default'; }
if (lbHost.indexOf('singmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('masraniglobal.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('minionsmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('fastandfurious.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('pitchperfectmovie.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('forgeofempires.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('mefeedia.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('fridays.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('tgifridays.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('aircanada.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('journeystosuccess.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('afi.org') != -1) { profileID = 'default'; }
if (lbHost.indexOf('bolthouse.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('campbells.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('goldfishsmiles.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('pepperidgefarm.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('prego.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('puffpastry.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('whatsinmyfood.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('allure.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('bonappetit.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('brides.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('cntraveler.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('gq.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('newyorker.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('vanityfair.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('wired.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('lionsgateathome.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('sanyashanhaitianautograph.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('nbcuniverso.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('timhortons.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('self.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('panerabread') != -1) { profileID = 'default'; }
if (lbHost.indexOf('ae.com') != -1) { profileID = 'default'; }
if (lbHost.indexOf('hawaiianairlines.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('eagleone.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('lexol.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('playtexplayon.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('schick.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('stayfree.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('homesense.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('sierra.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('homegoods.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('marshalls.') != -1) { profileID = 'default'; }
if (lbHost.indexOf('tjx.') != -1) { profileID = 'default'; }

/* Blocked Domains - END */

if (profileID != '') { load_lb = false; appendScript('//cdn-akamai.mookie1.com/adv/' + profileID + '.js', 'lb_adv'); }

if (load_lb) {
    try { lbLoad(); }
    catch (e) { if (isInDebug) { console.error('Error - ' + e); } }
    var lbLoaded = true;
}