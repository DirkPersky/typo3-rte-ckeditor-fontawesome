// Typo3 9.1 map jQuery back
if (typeof TYPO3.jQuery == 'undefined') {
    TYPO3.jQuery = jQuery;
}

function klick(el) {

    TYPO3.jQuery('#ckeditor-fa-icons a.active').removeClass('active');

    var className = el.childNodes[0].getAttribute('class');
    document.getElementsByClassName('fontawesomeClass')[0].getElementsByTagName('input')[0].value = className;
    el.className = el.className.replace('active', '');
    el.className += ' active';
}

function searchIcon(val) {
    var fas = document.getElementById('ckeditor-fa-icons');
    var a = fas.getElementsByTagName('a');
    for (var i = 0, len = a.length, el, atr; i < len; i++) {
        el = a[i];
        atr = el.childNodes[0].getAttribute('class');
        if (atr && atr.indexOf(val) >= 0) {
            el.style.display = 'inline-block';
        } else {
            el.style.display = 'none';
        }
    }
}

function clear() {
    TYPO3.jQuery('#ckeditor-fa-icons a').removeClass('active').removeAttr('style');
}

(function ($) {
    CKEDITOR.dialog.add('ckeditorFaDialog', function (editor) {
        var faBrands = [
            "42-group","500px","accessible-icon","accusoft","adn","adversal","affiliatetheme","airbnb","algolia","alipay","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","artstation","asymmetrik","atlassian","audible","autoprefixer","avianex","aviato","aws","bandcamp","battle-net","behance","behance-square","bilibili","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","bootstrap","bots","btc","buffer","buromobelexperte","buy-n-large","buysellads","canadian-maple-leaf","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","chrome","chromecast","cloudflare","cloudscale","cloudsmith","cloudversify","cmplid","codepen","codiepie","confluence","connectdevelop","contao","cotton-bureau","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","creative-commons-zero","critical-role","css3","css3-alt","cuttlefish","d-and-d","d-and-d-beyond","dailymotion","dashcube","deezer","delicious","deploydog","deskpro","dev","deviantart","dhl","diaspora","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","ebay","edge","edge-legacy","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","evernote","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","fantasy-flight-games","fedex","fedora","figma","firefox","firefox-browser","first-order","first-order-alt","firstdraft","flickr","flipboard","fly","font-awesome","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg","gg-circle","git","git-alt","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","golang","goodreads","goodreads-g","google","google-drive","google-pay","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","guilded","gulp","hacker-news","hacker-news-square","hackerrank","hashnode","hips","hire-a-helper","hive","hooli","hornbill","hotjar","houzz","html5","hubspot","ideal","imdb","instagram","instagram-square","instalod","intercom","internet-explorer","invision","ioxhost","itch-io","itunes","itunes-note","java","jedi-order","jenkins","jira","joget","joomla","js","js-square","jsfiddle","kaggle","keybase","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","mdb","medapps","medium","medrt","meetup","megaport","mendeley","microblog","microsoft","mix","mixcloud","mixer","mizuni","modx","monero","napster","neos","nfc-directional","nfc-symbol","nimblr","node","node-js","npm","ns8","nutritionix","octopus-deploy","odnoklassniki","odnoklassniki-square","old-republic","opencart","openid","opera","optin-monster","orcid","osi","padlet","page4","pagelines","palfed","patreon","paypal","perbyte","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pied-piper-square","pinterest","pinterest-p","pinterest-square","pix","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","raspberry-pi","ravelry","react","reacteurope","readme","rebel","red-river","reddit","reddit-alien","reddit-square","redhat","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","rust","safari","salesforce","sass","schlix","screenpal","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopify","shopware","simplybuilt","sistrix","sith","sitrox","sketch","skyatlas","skype","slack","slideshare","snapchat","snapchat-square","soundcloud","sourcetree","speakap","speaker-deck","spotify","square-font-awesome","square-font-awesome-stroke","squarespace","stack-exchange","stack-overflow","stackpath","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","suse","swift","symfony","teamspeak","telegram","tencent-weibo","the-red-yeti","themeco","themeisle","think-peaks","tiktok","trade-federation","trello","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","ubuntu","uikit","umbraco","uncharted","uniregistry","unity","unsplash","untappd","ups","usb","usps","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","watchman-monitoring","waze","weebly","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wirsindhandwerk","wix","wizards-of-the-coast","wodu","wolf-pack-battalion","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","wpressr","xbox","xing","xing-square","y-combinator","yahoo","yammer","yandex","yandex-international","yarn","yelp","yoast","youtube","youtube-square","zhihu"
        ];
        var faRegular = [
            "address-book","address-card","bell","bell-slash","bookmark","building","calendar","calendar-check","calendar-days","calendar-minus","calendar-plus","calendar-xmark","chart-bar","chess-bishop","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","circle","circle-check","circle-dot","circle-down","circle-left","circle-pause","circle-play","circle-question","circle-right","circle-stop","circle-up","circle-user","circle-xmark","clipboard","clock","clone","closed-captioning","comment","comment-dots","comments","compass","copy","copyright","credit-card","envelope","envelope-open","eye","eye-slash","face-angry","face-dizzy","face-flushed","face-frown","face-frown-open","face-grimace","face-grin","face-grin-beam","face-grin-beam-sweat","face-grin-hearts","face-grin-squint","face-grin-squint-tears","face-grin-stars","face-grin-tears","face-grin-tongue","face-grin-tongue-squint","face-grin-tongue-wink","face-grin-wide","face-grin-wink","face-kiss","face-kiss-beam","face-kiss-wink-heart","face-laugh","face-laugh-beam","face-laugh-squint","face-laugh-wink","face-meh","face-meh-blank","face-rolling-eyes","face-sad-cry","face-sad-tear","face-smile","face-smile-beam","face-smile-wink","face-surprise","face-tired","file","file-audio","file-code","file-excel","file-image","file-lines","file-pdf","file-powerpoint","file-video","file-word","file-zipper","flag","floppy-disk","folder","folder-closed","folder-open","font-awesome","futbol","gem","hand","hand-back-fist","hand-lizard","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-scissors","hand-spock","handshake","hard-drive","heart","hospital","hourglass","id-badge","id-card","image","images","keyboard","lemon","life-ring","lightbulb","map","message","money-bill-1","moon","newspaper","note-sticky","object-group","object-ungroup","paper-plane","paste","pen-to-square","rectangle-list","rectangle-xmark","registered","share-from-square","snowflake","square","square-caret-down","square-caret-left","square-caret-right","square-caret-up","square-check","square-full","square-minus","square-plus","star","star-half","star-half-stroke","sun","thumbs-down","thumbs-up","trash-can","user","window-maximize","window-minimize","window-restore"
        ];
        var faSolid = [
            "0","1","2","3","4","5","6","7","8","9","a","address-book","address-card","align-center","align-justify","align-left","align-right","anchor","anchor-circle-check","anchor-circle-exclamation","anchor-circle-xmark","anchor-lock","angle-down","angle-left","angle-right","angle-up","angles-down","angles-left","angles-right","angles-up","ankh","apple-whole","archway","arrow-down","arrow-down-1-9","arrow-down-9-1","arrow-down-a-z","arrow-down-long","arrow-down-short-wide","arrow-down-up-across-line","arrow-down-up-lock","arrow-down-wide-short","arrow-down-z-a","arrow-left","arrow-left-long","arrow-pointer","arrow-right","arrow-right-arrow-left","arrow-right-from-bracket","arrow-right-long","arrow-right-to-bracket","arrow-right-to-city","arrow-rotate-left","arrow-rotate-right","arrow-trend-down","arrow-trend-up","arrow-turn-down","arrow-turn-up","arrow-up","arrow-up-1-9","arrow-up-9-1","arrow-up-a-z","arrow-up-from-bracket","arrow-up-from-ground-water","arrow-up-from-water-pump","arrow-up-long","arrow-up-right-dots","arrow-up-right-from-square","arrow-up-short-wide","arrow-up-wide-short","arrow-up-z-a","arrows-down-to-line","arrows-down-to-people","arrows-left-right","arrows-left-right-to-line","arrows-rotate","arrows-spin","arrows-split-up-and-left","arrows-to-circle","arrows-to-dot","arrows-to-eye","arrows-turn-right","arrows-turn-to-dots","arrows-up-down","arrows-up-down-left-right","arrows-up-to-line","asterisk","at","atom","audio-description","austral-sign","award","b","baby","baby-carriage","backward","backward-fast","backward-step","bacon","bacteria","bacterium","bag-shopping","bahai","baht-sign","ban","ban-smoking","bandage","barcode","bars","bars-progress","bars-staggered","baseball","baseball-bat-ball","basket-shopping","basketball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","bed-pulse","beer-mug-empty","bell","bell-concierge","bell-slash","bezier-curve","bicycle","binoculars","biohazard","bitcoin-sign","blender","blender-phone","blog","bold","bolt","bolt-lightning","bomb","bone","bong","book","book-atlas","book-bible","book-bookmark","book-journal-whills","book-medical","book-open","book-open-reader","book-quran","book-skull","bookmark","border-all","border-none","border-top-left","bore-hole","bottle-droplet","bottle-water","bowl-food","bowl-rice","bowling-ball","box","box-archive","box-open","box-tissue","boxes-packing","boxes-stacked","braille","brain","brazilian-real-sign","bread-slice","bridge","bridge-circle-check","bridge-circle-exclamation","bridge-circle-xmark","bridge-lock","bridge-water","briefcase","briefcase-medical","broom","broom-ball","brush","bucket","bug","bug-slash","bugs","building","building-circle-arrow-right","building-circle-check","building-circle-exclamation","building-circle-xmark","building-columns","building-flag","building-lock","building-ngo","building-shield","building-un","building-user","building-wheat","bullhorn","bullseye","burger","burst","bus","bus-simple","business-time","c","cake-candles","calculator","calendar","calendar-check","calendar-day","calendar-days","calendar-minus","calendar-plus","calendar-week","calendar-xmark","camera","camera-retro","camera-rotate","campground","candy-cane","cannabis","capsules","car","car-battery","car-burst","car-on","car-rear","car-side","car-tunnel","caravan","caret-down","caret-left","caret-right","caret-up","carrot","cart-arrow-down","cart-flatbed","cart-flatbed-suitcase","cart-plus","cart-shopping","cash-register","cat","cedi-sign","cent-sign","certificate","chair","chalkboard","chalkboard-user","champagne-glasses","charging-station","chart-area","chart-bar","chart-column","chart-gantt","chart-line","chart-pie","chart-simple","check","check-double","check-to-slot","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","child","child-rifle","children","church","circle","circle-arrow-down","circle-arrow-left","circle-arrow-right","circle-arrow-up","circle-check","circle-chevron-down","circle-chevron-left","circle-chevron-right","circle-chevron-up","circle-dollar-to-slot","circle-dot","circle-down","circle-exclamation","circle-h","circle-half-stroke","circle-info","circle-left","circle-minus","circle-nodes","circle-notch","circle-pause","circle-play","circle-plus","circle-question","circle-radiation","circle-right","circle-stop","circle-up","circle-user","circle-xmark","city","clapperboard","clipboard","clipboard-check","clipboard-list","clipboard-question","clipboard-user","clock","clock-rotate-left","clone","closed-captioning","cloud","cloud-arrow-down","cloud-arrow-up","cloud-bolt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-showers-water","cloud-sun","cloud-sun-rain","clover","code","code-branch","code-commit","code-compare","code-fork","code-merge","code-pull-request","coins","colon-sign","comment","comment-dollar","comment-dots","comment-medical","comment-slash","comment-sms","comments","comments-dollar","compact-disc","compass","compass-drafting","compress","computer","computer-mouse","cookie","cookie-bite","copy","copyright","couch","cow","credit-card","crop","crop-simple","cross","crosshairs","crow","crown","crutch","cruzeiro-sign","cube","cubes","cubes-stacked","d","database","delete-left","democrat","desktop","dharmachakra","diagram-next","diagram-predecessor","diagram-project","diagram-successor","diamond","diamond-turn-right","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","disease","display","divide","dna","dog","dollar-sign","dolly","dong-sign","door-closed","door-open","dove","down-left-and-up-right-to-center","down-long","download","dragon","draw-polygon","droplet","droplet-slash","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","e","ear-deaf","ear-listen","earth-africa","earth-americas","earth-asia","earth-europe","earth-oceania","egg","eject","elevator","ellipsis","ellipsis-vertical","envelope","envelope-circle-check","envelope-open","envelope-open-text","envelopes-bulk","equals","eraser","ethernet","euro-sign","exclamation","expand","explosion","eye","eye-dropper","eye-low-vision","eye-slash","f","face-angry","face-dizzy","face-flushed","face-frown","face-frown-open","face-grimace","face-grin","face-grin-beam","face-grin-beam-sweat","face-grin-hearts","face-grin-squint","face-grin-squint-tears","face-grin-stars","face-grin-tears","face-grin-tongue","face-grin-tongue-squint","face-grin-tongue-wink","face-grin-wide","face-grin-wink","face-kiss","face-kiss-beam","face-kiss-wink-heart","face-laugh","face-laugh-beam","face-laugh-squint","face-laugh-wink","face-meh","face-meh-blank","face-rolling-eyes","face-sad-cry","face-sad-tear","face-smile","face-smile-beam","face-smile-wink","face-surprise","face-tired","fan","faucet","faucet-drip","fax","feather","feather-pointed","ferry","file","file-arrow-down","file-arrow-up","file-audio","file-circle-check","file-circle-exclamation","file-circle-minus","file-circle-plus","file-circle-question","file-circle-xmark","file-code","file-contract","file-csv","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-lines","file-medical","file-pdf","file-pen","file-powerpoint","file-prescription","file-shield","file-signature","file-video","file-waveform","file-word","file-zipper","fill","fill-drip","film","filter","filter-circle-dollar","filter-circle-xmark","fingerprint","fire","fire-burner","fire-extinguisher","fire-flame-curved","fire-flame-simple","fish","fish-fins","flag","flag-checkered","flag-usa","flask","flask-vial","floppy-disk","florin-sign","folder","folder-closed","folder-minus","folder-open","folder-plus","folder-tree","font","font-awesome","football","forward","forward-fast","forward-step","franc-sign","frog","futbol","g","gamepad","gas-pump","gauge","gauge-high","gauge-simple","gauge-simple-high","gavel","gear","gears","gem","genderless","ghost","gift","gifts","glass-water","glass-water-droplet","glasses","globe","golf-ball-tee","gopuram","graduation-cap","greater-than","greater-than-equal","grip","grip-lines","grip-lines-vertical","grip-vertical","group-arrows-rotate","guarani-sign","guitar","gun","h","hammer","hamsa","hand","hand-back-fist","hand-dots","hand-fist","hand-holding","hand-holding-dollar","hand-holding-droplet","hand-holding-hand","hand-holding-heart","hand-holding-medical","hand-lizard","hand-middle-finger","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-scissors","hand-sparkles","hand-spock","handcuffs","hands","hands-asl-interpreting","hands-bound","hands-bubbles","hands-clapping","hands-holding","hands-holding-child","hands-holding-circle","hands-praying","handshake","handshake-angle","handshake-simple","handshake-simple-slash","handshake-slash","hanukiah","hard-drive","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","head-side-cough","head-side-cough-slash","head-side-mask","head-side-virus","heading","headphones","headphones-simple","headset","heart","heart-circle-bolt","heart-circle-check","heart-circle-exclamation","heart-circle-minus","heart-circle-plus","heart-circle-xmark","heart-crack","heart-pulse","helicopter","helicopter-symbol","helmet-safety","helmet-un","highlighter","hill-avalanche","hill-rockslide","hippo","hockey-puck","holly-berry","horse","horse-head","hospital","hospital-user","hot-tub-person","hotdog","hotel","hourglass","hourglass-empty","hourglass-end","hourglass-start","house","house-chimney","house-chimney-crack","house-chimney-medical","house-chimney-user","house-chimney-window","house-circle-check","house-circle-exclamation","house-circle-xmark","house-crack","house-fire","house-flag","house-flood-water","house-flood-water-circle-arrow-right","house-laptop","house-lock","house-medical","house-medical-circle-check","house-medical-circle-exclamation","house-medical-circle-xmark","house-medical-flag","house-signal","house-tsunami","house-user","hryvnia-sign","hurricane","i","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-clip","igloo","image","image-portrait","images","inbox","indent","indian-rupee-sign","industry","infinity","info","italic","j","jar","jar-wheat","jedi","jet-fighter","jet-fighter-up","joint","jug-detergent","k","kaaba","key","keyboard","khanda","kip-sign","kit-medical","kitchen-set","kiwi-bird","l","land-mine-on","landmark","landmark-dome","landmark-flag","language","laptop","laptop-code","laptop-file","laptop-medical","lari-sign","layer-group","leaf","left-long","left-right","lemon","less-than","less-than-equal","life-ring","lightbulb","lines-leaning","link","link-slash","lira-sign","list","list-check","list-ol","list-ul","litecoin-sign","location-arrow","location-crosshairs","location-dot","location-pin","location-pin-lock","lock","lock-open","locust","lungs","lungs-virus","m","magnet","magnifying-glass","magnifying-glass-arrow-right","magnifying-glass-chart","magnifying-glass-dollar","magnifying-glass-location","magnifying-glass-minus","magnifying-glass-plus","manat-sign","map","map-location","map-location-dot","map-pin","marker","mars","mars-and-venus","mars-and-venus-burst","mars-double","mars-stroke","mars-stroke-right","mars-stroke-up","martini-glass","martini-glass-citrus","martini-glass-empty","mask","mask-face","mask-ventilator","masks-theater","mattress-pillow","maximize","medal","memory","menorah","mercury","message","meteor","microchip","microphone","microphone-lines","microphone-lines-slash","microphone-slash","microscope","mill-sign","minimize","minus","mitten","mobile","mobile-button","mobile-retro","mobile-screen","mobile-screen-button","money-bill","money-bill-1","money-bill-1-wave","money-bill-transfer","money-bill-trend-up","money-bill-wave","money-bill-wheat","money-bills","money-check","money-check-dollar","monument","moon","mortar-pestle","mosque","mosquito","mosquito-net","motorcycle","mound","mountain","mountain-city","mountain-sun","mug-hot","mug-saucer","music","n","naira-sign","network-wired","neuter","newspaper","not-equal","note-sticky","notes-medical","o","object-group","object-ungroup","oil-can","oil-well","om","otter","outdent","p","pager","paint-roller","paintbrush","palette","pallet","panorama","paper-plane","paperclip","parachute-box","paragraph","passport","paste","pause","paw","peace","pen","pen-clip","pen-fancy","pen-nib","pen-ruler","pen-to-square","pencil","people-arrows-left-right","people-carry-box","people-group","people-line","people-pulling","people-robbery","people-roof","pepper-hot","percent","person","person-arrow-down-to-line","person-arrow-up-from-line","person-biking","person-booth","person-breastfeeding","person-burst","person-cane","person-chalkboard","person-circle-check","person-circle-exclamation","person-circle-minus","person-circle-plus","person-circle-question","person-circle-xmark","person-digging","person-dots-from-line","person-dress","person-dress-burst","person-drowning","person-falling","person-falling-burst","person-half-dress","person-harassing","person-hiking","person-military-pointing","person-military-rifle","person-military-to-person","person-praying","person-pregnant","person-rays","person-rifle","person-running","person-shelter","person-skating","person-skiing","person-skiing-nordic","person-snowboarding","person-swimming","person-through-window","person-walking","person-walking-arrow-loop-left","person-walking-arrow-right","person-walking-dashed-line-arrow-right","person-walking-luggage","person-walking-with-cane","peseta-sign","peso-sign","phone","phone-flip","phone-slash","phone-volume","photo-film","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-circle-check","plane-circle-exclamation","plane-circle-xmark","plane-departure","plane-lock","plane-slash","plane-up","plant-wilt","plate-wheat","play","plug","plug-circle-bolt","plug-circle-check","plug-circle-exclamation","plug-circle-minus","plug-circle-plus","plug-circle-xmark","plus","plus-minus","podcast","poo","poo-storm","poop","power-off","prescription","prescription-bottle","prescription-bottle-medical","print","pump-medical","pump-soap","puzzle-piece","q","qrcode","question","quote-left","quote-right","r","radiation","radio","rainbow","ranking-star","receipt","record-vinyl","rectangle-ad","rectangle-list","rectangle-xmark","recycle","registered","repeat","reply","reply-all","republican","restroom","retweet","ribbon","right-from-bracket","right-left","right-long","right-to-bracket","ring","road","road-barrier","road-bridge","road-circle-check","road-circle-exclamation","road-circle-xmark","road-lock","road-spikes","robot","rocket","rotate","rotate-left","rotate-right","route","rss","ruble-sign","rug","ruler","ruler-combined","ruler-horizontal","ruler-vertical","rupee-sign","rupiah-sign","s","sack-dollar","sack-xmark","sailboat","satellite","satellite-dish","scale-balanced","scale-unbalanced","scale-unbalanced-flip","school","school-circle-check","school-circle-exclamation","school-circle-xmark","school-flag","school-lock","scissors","screwdriver","screwdriver-wrench","scroll","scroll-torah","sd-card","section","seedling","server","shapes","share","share-from-square","share-nodes","sheet-plastic","shekel-sign","shield","shield-cat","shield-dog","shield-halved","shield-heart","shield-virus","ship","shirt","shoe-prints","shop","shop-lock","shop-slash","shower","shrimp","shuffle","shuttle-space","sign-hanging","signal","signature","signs-post","sim-card","sink","sitemap","skull","skull-crossbones","slash","sleigh","sliders","smog","smoking","snowflake","snowman","snowplow","soap","socks","solar-panel","sort","sort-down","sort-up","spa","spaghetti-monster-flying","spell-check","spider","spinner","splotch","spoon","spray-can","spray-can-sparkles","square","square-arrow-up-right","square-caret-down","square-caret-left","square-caret-right","square-caret-up","square-check","square-envelope","square-full","square-h","square-minus","square-nfi","square-parking","square-pen","square-person-confined","square-phone","square-phone-flip","square-plus","square-poll-horizontal","square-poll-vertical","square-root-variable","square-rss","square-share-nodes","square-up-right","square-virus","square-xmark","staff-aesculapius","stairs","stamp","star","star-and-crescent","star-half","star-half-stroke","star-of-david","star-of-life","sterling-sign","stethoscope","stop","stopwatch","stopwatch-20","store","store-slash","street-view","strikethrough","stroopwafel","subscript","suitcase","suitcase-medical","suitcase-rolling","sun","sun-plant-wilt","superscript","swatchbook","synagogue","syringe","t","table","table-cells","table-cells-large","table-columns","table-list","table-tennis-paddle-ball","tablet","tablet-button","tablet-screen-button","tablets","tachograph-digital","tag","tags","tape","tarp","tarp-droplet","taxi","teeth","teeth-open","temperature-arrow-down","temperature-arrow-up","temperature-empty","temperature-full","temperature-half","temperature-high","temperature-low","temperature-quarter","temperature-three-quarters","tenge-sign","tent","tent-arrow-down-to-line","tent-arrow-left-right","tent-arrow-turn-left","tent-arrows-down","tents","terminal","text-height","text-slash","text-width","thermometer","thumbs-down","thumbs-up","thumbtack","ticket","ticket-simple","timeline","toggle-off","toggle-on","toilet","toilet-paper","toilet-paper-slash","toilet-portable","toilets-portable","toolbox","tooth","torii-gate","tornado","tower-broadcast","tower-cell","tower-observation","tractor","trademark","traffic-light","trailer","train","train-subway","train-tram","transgender","trash","trash-arrow-up","trash-can","trash-can-arrow-up","tree","tree-city","triangle-exclamation","trophy","trowel","trowel-bricks","truck","truck-arrow-right","truck-droplet","truck-fast","truck-field","truck-field-un","truck-front","truck-medical","truck-monster","truck-moving","truck-pickup","truck-plane","truck-ramp-box","tty","turkish-lira-sign","turn-down","turn-up","tv","u","umbrella","umbrella-beach","underline","universal-access","unlock","unlock-keyhole","up-down","up-down-left-right","up-long","up-right-and-down-left-from-center","up-right-from-square","upload","user","user-astronaut","user-check","user-clock","user-doctor","user-gear","user-graduate","user-group","user-injured","user-large","user-large-slash","user-lock","user-minus","user-ninja","user-nurse","user-pen","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-xmark","users","users-between-lines","users-gear","users-line","users-rays","users-rectangle","users-slash","users-viewfinder","utensils","v","van-shuttle","vault","vector-square","venus","venus-double","venus-mars","vest","vest-patches","vial","vial-circle-check","vial-virus","vials","video","video-slash","vihara","virus","virus-covid","virus-covid-slash","virus-slash","viruses","voicemail","volcano","volleyball","volume-high","volume-low","volume-off","volume-xmark","vr-cardboard","w","walkie-talkie","wallet","wand-magic","wand-magic-sparkles","wand-sparkles","warehouse","water","water-ladder","wave-square","weight-hanging","weight-scale","wheat-awn","wheat-awn-circle-exclamation","wheelchair","wheelchair-move","whiskey-glass","wifi","wind","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-empty","won-sign","worm","wrench","x","x-ray","xmark","xmarks-lines","y","yen-sign","yin-yang","z"
        ];

        function faIcons(fas, ty) {
            var icons = '';
            for (var x in fas) {
                var ids = fas[x];
                var id = ids.split('-').join('<br/>');
                icons += '<a href="#" onclick="klick(this);return false;"><span class="fa' + ty + ' fa-' + ids + '"></span>' + id + '</a>';
            }
            return icons;
        }

        return {
            title: 'FontAwesome6 Icons',
            minWidth: 500,
            minHeight: 400,
            resizable: false,
            contents: [{
                id: 'font-awesome',
                label: 'Add icon',
                elements: [
                    {
                        type: 'hbox',
                        widths: ['20%', '20%', '20%', '20%', '20%'],
                        children: [
                            {
                                type: 'select',
                                id: 'size',
                                className: 'faSelect',
                                label: 'Size',
                                items: [['No'], ['fa-xs'], ['fa-sm'], ['fa-lg'], ['fa-2x'], ['fa-3x'], ['fa-5x'], ['fa-7x'], ['fa-10x']],
                                'default': 'No',
                                commit: function (widget) {
                                    widget.setData('size', this.getValue());
                                }
                            },
                            {
                                type: 'select',
                                id: 'fixwidth',
                                className: 'faSelect',
                                label: 'Fixed Width',
                                items: [['No'], ['Yes']],
                                'default': 'No',
                                commit: function (widget) {
                                    widget.setData('fixwidth', this.getValue());
                                }
                            },
                            {
                                type: 'select',
                                id: 'bordered',
                                className: 'faSelect',
                                label: 'Bordered',
                                items: [['No'], ['Yes']],
                                'default': 'No',
                                commit: function (widget) {
                                    widget.setData('bordered', this.getValue());
                                }
                            },
                            {
                                type: 'select',
                                id: 'spinning',
                                className: 'faSelect',
                                label: 'Spinning',
                                items: [['No'], ['Yes']],
                                'default': 'No',
                                commit: function (widget) {
                                    widget.setData('spinning', this.getValue());
                                }
                            },
                            {
                                type: 'select',
                                id: 'rotating',
                                className: 'faSelect',
                                label: 'Rotat',
                                items: [['No'], ['fa-rotate-90'], ['fa-rotate-180'], ['fa-rotate-270'], ['fa-flip-horizontal'], ['fa-flip-vertical'], ['fa-flip-both']],
                                'default': 'No',
                                commit: function (widget) {
                                    widget.setData('rotating', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: 'hbox',
                        widths: ['15%', '15%', '15%', '50%'],
                        children: [
                            {
                                type: 'button', label: 'Brands (' + faBrands.length + ')',
                                onClick: function () {
                                    document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faBrands, 'b');
                                }
                            },
                            {
                                type: 'button', label: 'Regular (' + faRegular.length + ')',
                                onClick: function () {
                                    document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faRegular, 'r');
                                }
                            },
                            {
                                type: 'button', label: 'Solid (' + faSolid.length + ')',
                                onClick: function () {
                                    document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faSolid, 's');
                                }
                            },
                            {
                                type: 'text',
                                id: 'faSearch',
                                className: 'faSearch',
                                onKeyUp: function (e) {
                                    searchIcon(e.sender.$.value);
                                },
                                onLoad: function () {
                                    this.getInputElement().$.placeholder = 'Search';
                                    TYPO3.jQuery('#' + this.domId).css({
                                        'margin': 0
                                    }).find("label").remove();
                                }
                            },
                            {
                                type: 'text',
                                id: 'faicon',
                                className: 'fontawesomeClass',
                                style: 'display:none',
                                validate: CKEDITOR.dialog.validate.notEmpty("Select fontAwesome icon"),
                                onLoad: function () {
                                    this.getInputElement().setAttribute('readOnly', true);
                                },
                                setup: function (widget) {
                                    this.setValue(widget.data.class != '' ? widget.data.class : '');
                                },
                                commit: function (widget) {
                                    widget.setData('class', this.getValue());
                                }
                            }
                        ]
                    },
                    {type: 'html', html: '<div id="ckeditor-fa-icons">' + faIcons(faBrands, 'b') + '</div>'}
                ]
            }],
            onOk: function () {
                clear();
                var dialog = this, icon = editor.document.createElement('i'), cls = '';
                if (dialog.getValueOf('font-awesome', 'fixwidth') != "No") cls += ' fa-fw';
                if (dialog.getValueOf('font-awesome', 'bordered') != "No") cls += ' fa-border';
                if (dialog.getValueOf('font-awesome', 'spinning') != "No") cls += ' fa-spin';
                if (dialog.getValueOf('font-awesome', 'rotating') != "No") cls += ' ' + dialog.getValueOf('font-awesome', 'rotating');
                if (dialog.getValueOf('font-awesome', 'size') != "No") cls += ' ' + dialog.getValueOf('font-awesome', 'size');
                icon.setAttribute('class', dialog.getValueOf('font-awesome', 'faicon') + cls);
                icon.setAttribute('aria-hidden', 'true');
                // https://github.com/DirkPersky/typo3-rte-ckeditor-fontawesome/issues/3
                icon.setText(' ');
                // add icon to CKE
                editor.insertElement(icon);
            },
            onCancel: function () {
                clear();
            }
        };
    });
})(TYPO3.jQuery);

