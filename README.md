# 🔢 Weighted Playlist Generator

![](https://img.shields.io/github/license/femresirvan/Weighted-Playlist-Generator)
![](https://img.shields.io/badge/HTML-%3C%2F%3E-yellow?style=plastic&&logo=html5&logoColor=white&style=flat&color=white) 
![](https://img.shields.io/badge/CSS-%3C%2F%3E-yellow?style=plastic&&logo=css3&logoColor=white&style=flat&color=white) 
![](https://img.shields.io/badge/Javascript-%3C%2F%3E-yellow?style=plastic&&logo=javascript&logoColor=yellow&style=flat&color=yellow)![](https://img.shields.io/badge/webpack-%7C-9cf?logo=webpack)

### Table of Contents

 * [Giriş](Giriş)
 * [Özellikler](Özellikler)
 * [Kurulum](Kurulum)
 * [Proje Yapısı](ProjeYapısı)
## 🎀 Giriş

Normalde bir muzik playlisti hazirladigimiz zaman, arkadaki player tum muzikleri sirayla bir defa calar ve ardindan loop'a girer. Bu challenge icerisinde ise, ekledigimiz her sarkiya bir agirlik atayip, muziklerin o agirliga gore tekrarlanmasini istiyoruz. Reklam dunyasinda sikca gorulen bu uygulamaya genellikle Frequency based playlist deniyor. Ozetle, bir reklam havuzu olusturuluyor ve her reklam icin 1 ile 10 arasinda bir agirlik set ediliyor. Daha sonra, bu reklam havuzundan ornegin 300 itemlik bir reklam kusagi olusturuluyor. Ortaya cikan 300 itemlik kusak icerisindeki reklam siralamasi, reklam havuzunda set edilen agirliklara gore duzenleniyor.

Bu uygulama ile reklam kuşakları, bir image olarak varsayılıp gerekli inputlar girildikten sonra aynı şekilde reklam oynatılarak simule ediliyor. Sonrasında istatistiksel olarak 10000 kuşaktan sonra doğru sonuca var varılmadığı algoritma tarafından test ediliyor.

## 👀 Özellikler

### Kullanıcılar İçin

https://user-images.githubusercontent.com/60824063/149669237-a71e886a-3340-448f-b493-e778da014b2f.mp4

### İstatistikler İçin

<!-- Link GELECEK -->

- [x] Random advertorial generator için gerekli olan; playlist (içerisinde reklamları barındıran playlist; bu arrayde imageUrl(name), weight, oynatma yüzdeleri percentageWeight, aynı zamanda kuşak uzunluğuna göre 1 reklamda max ne kadar yer edinebileceğini belirten probWeight vs.),cumulativePlaylist (playlist weightleri 1,3,5 ise 1,4,9 olarak ele alan array), randomIndexGenerator() fonksiyonu, advertorial(reklam kuşağı arrayi), makeStatistics() fonksiyonu oluşturuldu.
- [x] Algoritma test edildi.
- [x] Webpack eklendi
- [x] Layout yapısı tasarlandı.
- [x] JS ile DOM eventleri gerçekleştirildi.
- [x] CSS ile styling yapıldı.
- [x] Hatalı input kontrolü ve errorState() eklendi.
- [x] 10000kuşak generate edip istatistik oluşturulması yapıldı. *!* Burada önemli olan kavram istatistik için reklam kuşağındaki durumları biraz esnek tuttum. Eğer belirli koşullar sağlamıyorsa infinite loop'a giriyordu ben de 100 kez belirli koşul sağlamazsa o zaman maalesef arrayi doğru bastırma ifadesini kullandım.
## 👨‍💻 Kurulum
### Ön ihtiyaçlar

- [Node.js & NPM](https://nodejs.org/en/download/)

Clone repository
```bash
$ git clone https://github.com/femresirvan/Weighted-Playlist-Generator.git
$ cd Weighted-Playlist-Generator
```

Dependency kurulumu ve node'un çalıştırılması
```bash
$ npm i
$ node app
```

## Proje Yapısı

![Screenshot from 2022-01-16 19-26-05](https://user-images.githubusercontent.com/60824063/149669249-9ba0b7ed-babf-4ea4-a8e7-6a9d4e3e4758.png)

- calc.js ile gerekli algoritmalar tasarlanmıştır.
- carousel.js carousel için gerekli dom eventleri.
- lists.js tablo ve liste için gerekli dom eventleri.
- form.js 2 tane form için gerekli dom eventleri.(Burada dikkat edilmesi gereken husus; diğer iki component de finishButtonHandler() ile çağrıldığı form.js'e common.js vasıtasıyla bağlanmasıdır.)
- index.js programın çalıştığı ana kısım.
- ~./dist/main.js bütün js/css dosyalarının babel ile derlendiği ve tek dosya haline getirildiği kısım. 

> 🤝 Bana bu fırsatı tanıdığı için OMMA'ya çok teşekkür ederim 😊.
