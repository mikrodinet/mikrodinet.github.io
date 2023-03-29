var jumlah_find = 10;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds(3)
var find = detik % jumlah_find;
find += 1;
if (find == 1) {
    url = "https://www.mikrodinet.eu.org/?user=Mikrodinet";
    alt = "MIKRODINET";
    title = "MIKRODINET OPPEN SOURCE GITHUB";
    banner = "https://www.mikrodinet.eu.org/asset/img/ico.png";
    width = "300";
    height = "250";
}
if (find == 2) {
    url = "https://www.mikrodinet.eu.org/?user=Github ";
    alt = "GITHUB";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE GITHUB";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png";
    width = "300";
    height = "250";
}
if (find == 3) {
    url = "https://www.mikrodinet.eu.org/?user=MICROSOFT  ";
    alt = "MICROSOFT ";
    title = "MIKRODINET OPPEN SOURCE MICROSOFT";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png ";
    width = "300";
    height = "250";
}
if (find == 4) {
    url = "https://www.mikrodinet.eu.org/?user=GOOGLE";
    alt = "GOOGLE";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE GOOGLE  ";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 5) {
    url = "https://www.mikrodinet.eu.org/?user=GOLANG ";
    alt = "GOLANG";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE GOLANG (The Go Programming Language)";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 6) {
    url = "https://www.mikrodinet.eu.org/?user=CLOUDFLARE";
    alt = "CLOUDFLARE";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CLOUDFLARE";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 7) {
    url = "https://www.mikrodinet.eu.org/?user=Whatsapp ";
    alt = "WHATSHAPP";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE WHATSAPP";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 8) {
    url = "https://www.mikrodinet.eu.org/?user=awdev-corporation";
    alt = "Awdev Corporation";
    title = "MIKRODINET FINDER FREE OPPEN SOUCE AWDEV CORPORATION";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 9) {
    url = "https://www.mikrodinet.eu.org/?user=Twitter";
    alt = " TWITTER";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE TWITTER ";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}
if (find == 10) {
    url = "https://www.mikrodinet.eu.org/?user=FACEBOOK  ";
    alt = " FACEBOOK";
    title = "MIKRODINET FINDER FREE OPPEN SOURCE CODE FACEBOOK  ";
    banner = "https://www.mikrodinet.eu.org/asset/img/finder-mikrodinet.png  ";
    width = "300";
    height = "250";
}

document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
