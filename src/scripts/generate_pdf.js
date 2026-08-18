import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const imgBuffer = fs.readFileSync('public/images/proposal-header.jpeg');
const imgBase64 = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`;

const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Fiyat Teklifi - HT-2026/07-009</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #000000;
      font-size: 13px;
      line-height: 1.4;
    }
    .page {
      width: 210mm;
      height: 297mm;
      padding: 12mm 15mm 12mm 15mm;
      position: relative;
      page-break-after: always;
      page-break-inside: avoid;
      background: #ffffff;
      overflow: hidden;
    }
    .page:last-child {
      page-break-after: auto;
    }
    .header-img {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: 6px;
    }
    .top-header-divider {
      border-bottom: 1px solid #666;
      margin-bottom: 8px;
    }
    .title-banner {
      background-color: #e50914;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      padding: 2px 0;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .meta-bar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      font-size: 13px;
      font-weight: bold;
      padding-bottom: 6px;
      border-bottom: 1.5px solid #000;
      margin-bottom: 14px;
    }
    .meta-bar .divider {
      font-weight: normal;
      color: #888;
    }
    .info-grid {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 16px;
      font-size: 12.5px;
      line-height: 1.55;
    }
    .info-col {
      flex: 1;
    }
    .info-title {
      font-weight: bold;
      font-size: 13.5px;
      margin-bottom: 2px;
    }
    .bold {
      font-weight: bold;
    }
    .terms-bank-box {
      border: 1.5px solid #000;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 22px;
      display: flex;
      justify-content: space-between;
      font-size: 12.5px;
      line-height: 1.6;
    }
    .section-title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
      letter-spacing: 0.3px;
    }
    .section-line {
      border-bottom: 1px solid #777;
      margin-bottom: 12px;
    }
    table.proposal-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.5px solid #000;
      margin-bottom: 16px;
    }
    table.proposal-table th {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 12px;
      font-weight: bold;
      color: #777777;
      text-align: left;
      background-color: #ffffff;
      letter-spacing: 0.2px;
    }
    table.proposal-table th.center {
      text-align: center;
    }
    table.proposal-table th.right {
      text-align: right;
    }
    table.proposal-table td {
      border: 1px solid #000;
      padding: 7px 8px;
      font-size: 12.5px;
    }
    table.proposal-table td.center {
      text-align: center;
    }
    table.proposal-table td.right {
      text-align: right;
    }
    .totals-area {
      width: 270px;
      margin-left: auto;
      font-size: 13px;
      line-height: 1.85;
      font-weight: bold;
    }
    .totals-line {
      display: flex;
      justify-content: space-between;
    }
    .grand-total-line {
      display: flex;
      justify-content: space-between;
      border-top: 1.5px solid #000;
      margin-top: 3px;
      padding-top: 4px;
      font-size: 13.5px;
    }
    .page-subtitle {
      font-size: 14px;
      font-weight: bold;
      margin-top: 6px;
      margin-bottom: 2px;
    }
    .page-teklif-no {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 6px;
    }
    .guarantee-title {
      font-size: 14px;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 12px;
    }
    .guarantee-list {
      list-style-type: none;
      padding-left: 0;
      margin: 0 0 28px 0;
      line-height: 1.7;
      font-size: 12.5px;
    }
    .guarantee-list li {
      margin-bottom: 6px;
      position: relative;
      padding-left: 14px;
    }
    .guarantee-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      font-weight: bold;
    }
    .legal-text {
      font-size: 12px;
      line-height: 1.6;
      margin-bottom: 70px;
    }
    .sign-section {
      display: flex;
      justify-content: space-between;
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      padding: 0 20px;
    }
    .sign-column {
      width: 45%;
    }
    .sign-space {
      margin-top: 60px;
    }
    .custom-box {
      border: 1.5px solid #000;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 18px;
      min-height: 80px;
    }
    .custom-box-header {
      font-weight: bold;
      font-size: 13px;
      margin-bottom: 6px;
    }
    .custom-box-body {
      font-size: 12.5px;
      color: #333;
    }
  </style>
</head>
<body>

  <!-- SAYFA 1 -->
  <div class="page">
    <img src="${imgBase64}" alt="Hızır Teknik Header" class="header-img" />
    
    <div class="title-banner">PROFORMA FATURA / FİYAT TEKLİFİ</div>
    
    <div class="meta-bar">
      <span>Tarih: 30.07.2026</span>
      <span class="divider">|</span>
      <span>Teklif No: HT-2026/07-009</span>
    </div>

    <div class="info-grid">
      <div class="info-col">
        <div class="info-title">Firma:</div>
        <div class="bold">HIZIR TEKNİK TEKNİK SERVİS HİZMETLERİ</div>
        <div>Elektrik - Elektronik - Otomasyon - Mekanik - Isıtma - Soğutma</div>
        <div>Adres: Şehit Osman Avcı Mh. 1404 Cd. Vera City 2/AG Eryaman, Etimesgut / ANKARA</div>
        <div>Telefon: 0532 775 12 50 / 0540 775 12 50</div>
        <div>E-posta: info@hizirteknik.com</div>
        <div>Vergi Dairesi: Etimesgut Vergi Dairesi | Vergi No: 982 005 43 22</div>
      </div>
      <div class="info-col">
        <div class="info-title">Müşteri:</div>
        <div class="bold">Eryaman Toptan su ve Meşrubat</div>
        <div>Adres: Şehit Osman Avcı 1404 cad. 2AA Vera City Etimesgut/ANKARA</div>
        <div>Telefon: 05555555555</div>
        <div>Vergi Dairesi: Etimesgut Vergi Dairesi</div>
        <div>Vergi No: 0650325999</div>
        <div style="margin-top: 8px;"><span class="bold">Konu: Kamera Montaj Teklifi</span></div>
      </div>
    </div>

    <div class="terms-bank-box">
      <div>
        <div><span class="bold">Teklif Geçerlilik Süresi:</span> 10 Gün (Son Tarih: 09.08.2026)</div>
        <div><span class="bold">Ödeme Türü:</span> Nakit / EFT / Havale</div>
        <div><span class="bold">Ödeme Şekli:</span> %50 PEŞİN KALAN İŞ BİTİMİNDE</div>
      </div>
      <div style="text-align: right;">
        <div><span class="bold">Banka: GARANTİ BANKASI</span></div>
        <div><span class="bold">IBAN:</span> TR48 0006 2001 1980 0006 2942 11</div>
      </div>
    </div>

    <div class="section-title">TEKLİF KALEM DETAYLARI VE MALZEME TABLOSU</div>
    <div class="section-line"></div>

    <table class="proposal-table">
      <thead>
        <tr>
          <th style="width: 40px;" class="center">NO</th>
          <th>MALZEME / HİZMET AÇIKLAMASI</th>
          <th style="width: 90px;" class="center">BİRİM</th>
          <th style="width: 125px;" class="right">BR. FİYATI</th>
          <th style="width: 125px;" class="right">TUTARI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center bold">1</td>
          <td class="bold">Hizmet ve Malzeme Bedeli</td>
          <td class="center">1 Paket</td>
          <td class="right">27.385,35 TL</td>
          <td class="right">27.385,35 TL</td>
        </tr>
      </tbody>
    </table>

    <div class="totals-area">
      <div class="totals-line">
        <span>ARA TOPLAM:</span>
        <span>27.385,35 TL</span>
      </div>
      <div class="totals-line">
        <span>KDV (%20):</span>
        <span>+ 5.477,07 TL</span>
      </div>
      <div class="grand-total-line">
        <span>TOPLAM TUTAR:</span>
        <span>32.862,42 TL</span>
      </div>
    </div>
  </div>

  <!-- SAYFA 2 -->
  <div class="page">
    <img src="${imgBase64}" alt="Hızır Teknik Header" class="header-img" />

    <div class="page-subtitle">ARIZA TESPİT DETAYLARI & SÖZLEŞME</div>
    <div class="page-teklif-no">Teklif No: HT-2026/07-009</div>
    <div class="top-header-divider"></div>

    <div class="guarantee-title">GARANTİ VE UYGULAMA KOŞULLARI</div>
    <ul class="guarantee-list">
      <li>Proforma fatura bilgi amaçlıdır, resmi belge yerine geçmez.</li>
      <li>Fiyata malzeme, nakliye ve hizmet bedeli dahildir.</li>
      <li>Makine, cihaz ve her türlü malzemelerde üretici firma garantisi geçerlidir.</li>
      <li>Doğal afetler ve mücbir sebepler hariç işçiliğimiz 2 yıl HIZIR TEKNİK garantisi altındadır.</li>
      <li>Malzeme tedariği müşteriye ait olan işlerde, işin yapım esnasında veya tesliminden sonra malzemeden kaynaklı çıkabilecek sorunlarda servis ve onarım ücreti alınır.</li>
    </ul>

    <div class="legal-text">
      Yukarıda belirtilen şartlarla iki nüsha olarak tanzim ve teati olunan işbu sözleşme taraflarca karşılıklı olarak imza altına alınmış ve bir nüshası MÜŞTERİ'YE / KURUM'A verilmiştir.
    </div>

    <div class="sign-section">
      <div class="sign-column">
        <div>TEKLİF VEREN / YÜKLENİCİ</div>
        <div class="sign-space">KAŞE / İMZA</div>
      </div>
      <div class="sign-column">
        <div>MÜŞTERİ / KURUM ONAYI</div>
        <div class="sign-space">KAŞE / İMZA</div>
      </div>
    </div>
  </div>

  <!-- SAYFA 3 -->
  <div class="page">
    <img src="${imgBase64}" alt="Hızır Teknik Header" class="header-img" />

    <div class="page-subtitle">TEKLİF NOTLARI VE AÇIKLAMALAR</div>
    <div class="page-teklif-no">Teklif No: HT-2026/07-009</div>
    <div class="top-header-divider"></div>

    <div class="custom-box">
      <div class="custom-box-header">Sorunun Ne Olduğu:</div>
      <div class="custom-box-body">Belirtilmemiş.</div>
    </div>

    <div class="custom-box">
      <div class="custom-box-header">Çözümünün Ne Olduğu / Planlanan İşlemler:</div>
      <div class="custom-box-body">Belirtilmemiş.</div>
    </div>
  </div>

</body>
</html>`;

const htmlFilePath = path.resolve('public/Teklif_HT-2026-07-009_TekSatir.html');
const pdfFilePath = path.resolve('public/Teklif_HT-2026-07-009_TekSatir.pdf');

fs.writeFileSync(htmlFilePath, htmlContent);
console.log('HTML written to:', htmlFilePath);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserExe = fs.existsSync(chromePath) ? chromePath : edgePath;

try {
  execSync(`"${browserExe}" --headless --no-sandbox --print-to-pdf="${pdfFilePath}" --no-pdf-header-footer "${htmlFilePath}"`);
  console.log('PDF output generated successfully:', pdfFilePath);
} catch (e) {
  console.error('Error generating PDF:', e.message);
}
