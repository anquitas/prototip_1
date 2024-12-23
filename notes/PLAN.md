## TEMEL MODULLLER
+ base
  - container -- form container x2
  - kaide -- card x2, model x2
  - input -- text
  - menu -- yanMenu
  - sayfa -- grid, flex?
+ site 
  - navigation -- header, searchBar, login/register, user
  - footer -- footer, footerList
  - bilgi? -- hakkinda, iletisim, sss


## TEMEL MODÜLLER
+ container
  - form container -- form elementlerini sınırlar
+ kaide
  - card -- fiziksel kart, başlık, çift element
  - model -- kavramsal?, modelCard?
+ input
  - TextInput -- input almalı, v-model nasıl olacak, ? mantıklı mı
+ menu
  - yanMenu -- ? verileri nasıl alacak, ? bağlantıları nasıl sağlayacak
+ sayfa
  - grid -- sayfalar için, hazır multi template grid komponentler
  - flex -- sayfalar için, hazır multi element flex komponentler





## SITE MODÜLLERİ
+ header
  - components -- NavBar, HeadingLogo, LoginRegister, UserAvatar
+ footer
  - components -- FooterComp, FooterList
+ bilgi


## DOMAIN MODULLER
+ geri bildirim
  - routes -- 
  - view -- GeriBildirim
  - component -- GeriBildirimKomp, yorumKomp, YorumList
  - sub components -- geriBildirimHeader, geriBildirimContent, geriBildirimFooter
  - sub systems -- yorum sistemi, beğenme sistemi, oylama sistemi
  - composables -- 
+ profil
  - routes -- `/kullanici`, `/kullanici/genel`, `/kullanici/iletisim`
  - view -- ProfilAyar V, profilAyarGenel, profilAyarIletisim, kullaniciProfili
  - components -- uyeBilgiForm, uyeIletisimForm, uyeProfilBilgi
  - composables -- 
+ ayarlar
  - rotes -- `/ayarlar`, `/ayarlar/guvenlik`, `/ayarlar/tema`, `/ayarlar/hesap`
  - views -- ayar V, ayarGuvenlik, ayarTema?, ayarHesap
  - components -- sifreDegistirmeForm, temaForm?, HesapForm
  - composables -- 
+ bilgi
  - routes -- `/hakkinda`, `/sss`, `iletisim`
  - views -- Hakkinda, SSS, Iletisim
  - components -- YanMenu, sayfa yapısı komponenti, bilgi görüntüleme komponenti
  - composables --
+ 


## COMPOSABLES
+ POST işlemleri
  - üye girişi
  - üye olma
+ DELETE işlemleri
  - mesaj silme
+ GET
  - kullaniciAl -- farklı tür bilgiler için farklı istekler


## NOTLAR
+ kullanıcı ile ilgili bilgiler parça halinde alınmalı ve kısa süre tutulmalı