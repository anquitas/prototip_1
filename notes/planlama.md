## yapılacaklar
+ `BaseCollapse` daha iyi dizayn edilmeli
  - `/iletisim` rotasındaki görünümü kontrol edilmeli
+ kullanıcı bilgisi almak için composable modüller yapılmalı
+ kullanıcı bilgisi kullanıcı paneli içerisinde görünmeli
  - avatar kısmı ve bu bilgiyi kapsayan yeni bir kullanıcı paneli inşa edilebilir
+ sayfalar için layout yapılmalı ve uygulanmalı
  - grid sistemi kullanlabilir, taslak `GridView` komponenti olarak yapıldı
+ sunucu endpoint bağlantılarını kolaylaştırmak için bir sistem gerekli
+ komponentlerde kullanılacak veriler için store sistemi
  - hangi komponentler, hangi tip veriler için store kullanmalı
  - store'lar modüllere nasıl bölünmeli
+ yan menüye bağlı içerik navigasyonu kurulmalı
  - değişim nasıl kontrol edilecek
  - ? store kullanılmalı mı bir işe yarar mı


## sorunlar
+ çeşitli komponenlerde görünüm sorunu
  - komponentler sayfanın tamamını kaplıyor ve birbirine bitişik olarak duruyorlar
  - düzeltmek için konteyner sistemi kurma ve flexBox mekanizmasını daha iyi anlamak gerekiyor
  - görüldüğü yerler üyelik komponentlerinin formları, `IletisimView` komponenti
+ kullanıcı panelinin (avatar) kendi üzerine tıklanınca kapanması sağlanamadı
  - `details` ve `summary` elementlerinin kullanımı ile ilgili sorunlar


## TAMAMLANANLAR


## ÇÖZÜLENLER