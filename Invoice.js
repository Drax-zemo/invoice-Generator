<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurant Order System</title>
  <style>
    :root {
      --primary-color: #4CAF50;
      --secondary-color: #45a049;
      --light-bg: #f9f9f9;
      --border-color: #ddd;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    h1, h2, h3 {
      color: var(--primary-color);
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--border-color);
    }
    
    h2 {
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 5px;
      margin-top: 30px;
    }
    
    .menu-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .menu-category {
      background: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .menu-item {
      margin-bottom: 15px;
      padding: 10px;
      border-bottom: 1px dashed var(--border-color);
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      align-items: center;
    }
    
    .item-name {
      font-weight: bold;
      flex: 1;
    }
    
    .item-price {
      color: var(--primary-color);
      font-weight: bold;
      margin-left: 10px;
    }
    
    .item-options {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 5px;
    }
    
    .option-group {
      display: flex;
      align-items: center;
    }
    
    .option-group label {
      margin-right: 5px;
      font-size: 14px;
    }
    
    input[type="radio"] {
      margin-right: 5px;
    }
    
    input[type="number"] {
      width: 60px;
      padding: 5px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
    }
    
    .actions {
      text-align: center;
      margin: 30px 0;
    }
    
    button {
      padding: 12px 25px;
      font-size: 16px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
      margin: 5px;
    }
    
    button:hover {
      background: var(--secondary-color);
    }
    
    #invoice {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-top: 30px;
      display: none;
    }
    
    .invoice-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    
    .invoice-items {
      margin-bottom: 20px;
    }
    
    .invoice-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border-color);
    }
    
    .invoice-total {
      font-size: 1.2em;
      font-weight: bold;
      text-align: right;
      margin-top: 15px;
      padding-top: 10px;
      border-top: 2px solid var(--primary-color);
    }
    
    .no-items {
      color: #666;
      font-style: italic;
      text-align: center;
      padding: 20px;
    }

    .extra-cheese-note {
      font-size: 12px;
      color: #666;
      margin-top: 5px;
    }
    
    .item-description {
      font-size: 12px;
      color: #666;
      margin-bottom: 5px;
    }
    
    @media print {
      body * {
        visibility: hidden;
      }
      #invoice, #invoice * {
        visibility: visible;
      }
      #invoice {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <h1> The Unique स्वाद Invoice Generator </h1>
  
  <div class="menu-container">
    <!-- Main Course Section -->
    <div class="menu-category">
      <h2>Main Course</h2>
      <div class="extra-cheese-note">Extra Cheese: ₹20/-</div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Shahi Paneer</span>
          <span class="item-price">₹120/₹200</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="shahiPaneer" id="shahiPaneerHalf" value="half">
            <label for="shahiPaneerHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="shahiPaneer" id="shahiPaneerFull" value="full">
            <label for="shahiPaneerFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="shahiPaneerQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Kadhai Paneer</span>
          <span class="item-price">₹120/₹210</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="kadhaiPaneer" id="kadhaiPaneerHalf" value="half">
            <label for="kadhaiPaneerHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="kadhaiPaneer" id="kadhaiPaneerFull" value="full">
            <label for="kadhaiPaneerFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="kadhaiPaneerQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butter Paneer Masala</span>
          <span class="item-price">₹120/₹210</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="butterPaneer" id="butterPaneerHalf" value="half">
            <label for="butterPaneerHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="butterPaneer" id="butterPaneerFull" value="full">
            <label for="butterPaneerFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterPaneerQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Dal Makhni</span>
          <span class="item-price">₹70/₹140</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="dalMakhni" id="dalMakhniHalf" value="half">
            <label for="dalMakhniHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="dalMakhni" id="dalMakhniFull" value="full">
            <label for="dalMakhniFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="dalMakhniQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Aloo Jeera</span>
          <span class="item-price">₹50/₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="alooJeera" id="alooJeeraHalf" value="half">
            <label for="alooJeeraHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="alooJeera" id="alooJeeraFull" value="full">
            <label for="alooJeeraFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="alooJeeraQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Dal Fry</span>
          <span class="item-price">₹60/₹110</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="dalFry" id="dalFryHalf" value="half">
            <label for="dalFryHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="dalFry" id="dalFryFull" value="full">
            <label for="dalFryFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="dalFryQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chola Bhatura</span>
          <span class="item-price">₹35/₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="cholaBhatura" id="cholaBhaturaHalf" value="half">
            <label for="cholaBhaturaHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="cholaBhatura" id="cholaBhaturaFull" value="full">
            <label for="cholaBhaturaFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="cholaBhaturaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chola Puri</span>
          <span class="item-price">₹20/₹35</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="cholaPuri" id="cholaPuriHalf" value="half">
            <label for="cholaPuriHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="cholaPuri" id="cholaPuriFull" value="full">
            <label for="cholaPuriFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="cholaPuriQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Roti Section -->
    <div class="menu-category">
      <h2>Roti</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Tawa Roti</span>
          <span class="item-price">₹8</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="tawaRotiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butter Tawa Roti</span>
          <span class="item-price">₹12</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterTawaRotiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Tandoori Roti</span>
          <span class="item-price">₹8</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="tandooriRotiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butter Tandoori Roti</span>
          <span class="item-price">₹12</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterTandooriRotiQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Paratha Section -->
    <div class="menu-category">
      <h2>Paratha</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Aloo Paratha</span>
          <span class="item-price">₹40</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="alooParathaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Pyaz Paratha</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pyazParathaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Paratha</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerParathaQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Thali Section -->
    <div class="menu-category">
      <h2>Thali</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Normal Thali</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-description">Dal, Plain Rice, Sabji, 4 Roti, Sweet, Salad, Raita</div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="normalThaliQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Deluxe Thali</span>
          <span class="item-price">₹180</span>
        </div>
        <div class="item-description">Paneer, Jeera Rice, Sabji, 4 Roti, Sweet, Salad, Raita</div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="deluxeThaliQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Momo Section -->
    <div class="menu-category">
      <h2>Momo</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Steam Momo</span>
          <span class="item-price">₹35/₹65</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="vegSteamMomo" id="vegSteamMomoHalf" value="half">
            <label for="vegSteamMomoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="vegSteamMomo" id="vegSteamMomoFull" value="full">
            <label for="vegSteamMomoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vegSteamMomoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Steam Momo</span>
          <span class="item-price">₹50/₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="paneerSteamMomo" id="paneerSteamMomoHalf" value="half">
            <label for="paneerSteamMomoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="paneerSteamMomo" id="paneerSteamMomoFull" value="full">
            <label for="paneerSteamMomoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerSteamMomoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Fry Veg Momo</span>
          <span class="item-price">₹45/₹75</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="fryVegMomo" id="fryVegMomoHalf" value="half">
            <label for="fryVegMomoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="fryVegMomo" id="fryVegMomoFull" value="full">
            <label for="fryVegMomoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="fryVegMomoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Fry Paneer Momo</span>
          <span class="item-price">₹60/₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="fryPaneerMomo" id="fryPaneerMomoHalf" value="half">
            <label for="fryPaneerMomoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="fryPaneerMomo" id="fryPaneerMomoFull" value="full">
            <label for="fryPaneerMomoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="fryPaneerMomoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Kurkure Momo</span>
          <span class="item-price">₹60/₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="vegKurkureMomo" id="vegKurkureMomoHalf" value="half">
            <label for="vegKurkureMomoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="vegKurkureMomo" id="vegKurkureMomoFull" value="full">
            <label for="vegKurkureMomoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vegKurkureMomoQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Spring Roll Section -->
    <div class="menu-category">
      <h2>Spring Roll</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Spring Roll</span>
          <span class="item-price">₹50/₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="springRoll" id="springRollHalf" value="half">
            <label for="springRollHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="springRoll" id="springRollFull" value="full">
            <label for="springRollFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="springRollQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Kurkure Spring Roll</span>
          <span class="item-price">₹60/₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="kurkureSpringRoll" id="kurkureSpringRollHalf" value="half">
            <label for="kurkureSpringRollHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="kurkureSpringRoll" id="kurkureSpringRollFull" value="full">
            <label for="kurkureSpringRollFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="kurkureSpringRollQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Pasta Section -->
    <div class="menu-category">
      <h2>Pasta</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Arrabiata (Red Sauce)</span>
          <span class="item-price">₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="arrabiataPastaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Alfredo (White Sauce)</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="alfredoPastaQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Noodles Section -->
    <div class="menu-category">
      <h2>Noodles</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Noodles</span>
          <span class="item-price">₹50/₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="veggieNoodles" id="veggieNoodlesHalf" value="half">
            <label for="veggieNoodlesHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="veggieNoodles" id="veggieNoodlesFull" value="full">
            <label for="veggieNoodlesFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieNoodlesQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Noodles</span>
          <span class="item-price">₹70/₹140</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="paneerNoodles" id="paneerNoodlesHalf" value="half">
            <label for="paneerNoodlesHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="paneerNoodles" id="paneerNoodlesFull" value="full">
            <label for="paneerNoodlesFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerNoodlesQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Schezwan Veggie Noodles</span>
          <span class="item-price">₹60/₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="schezwanNoodles" id="schezwanNoodlesHalf" value="half">
            <label for="schezwanNoodlesHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="schezwanNoodles" id="schezwanNoodlesFull" value="full">
            <label for="schezwanNoodlesFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="schezwanNoodlesQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mocktails Section -->
    <div class="menu-category">
      <h2>Mocktails</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Shikanji Soda</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="shikanjiSodaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Mint Mojito</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="mintMojitoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Masala Mojito</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="masalaMojitoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Blue Haven</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="blueHavenQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Green Apple</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="greenAppleQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Watermelon</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="watermelonQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Strawberry</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="strawberryMocktailQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Blueberry</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="blueberryQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Ice Cream Section -->
    <div class="menu-category">
      <h2>Ice Cream</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Vanilla</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vanillaIceCreamQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butterscotch</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterscotchIceCreamQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Strawberry</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="strawberryIceCreamQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Raj Bhog</span>
          <span class="item-price">₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="rajBhogQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chocolate</span>
          <span class="item-price">₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="chocolateIceCreamQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Mix Flavour (4 Scoops)</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="mixFlavourQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Soft Drinks Section -->
    <div class="menu-category">
      <h2>Soft Drinks</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Cold Drink with Ice</span>
          <span class="item-price">₹30</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="coldDrinkQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">HELL Energy Drink with Ice</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="hellEnergyDrinkQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Red Bull with Ice</span>
          <span class="item-price">₹150</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="redBullQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Fried Rice Section -->
    <div class="menu-category">
      <h2>Fried Rice</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Fried Rice</span>
          <span class="item-price">₹50/₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="veggieFriedRice" id="veggieFriedRiceHalf" value="half">
            <label for="veggieFriedRiceHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="veggieFriedRice" id="veggieFriedRiceFull" value="full">
            <label for="veggieFriedRiceFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieFriedRiceQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Fried Rice</span>
          <span class="item-price">₹60/₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="paneerFriedRice" id="paneerFriedRiceHalf" value="half">
            <label for="paneerFriedRiceHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="paneerFriedRice" id="paneerFriedRiceFull" value="full">
            <label for="paneerFriedRiceFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerFriedRiceQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Chilli Section -->
    <div class="menu-category">
      <h2>Chilli</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chilli Potato</span>
          <span class="item-price">₹50/₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="chilliPotato" id="chilliPotatoHalf" value="half">
            <label for="chilliPotatoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="chilliPotato" id="chilliPotatoFull" value="full">
            <label for="chilliPotatoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="chilliPotatoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Honey Chilli Potato</span>
          <span class="item-price">₹60/₹110</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="honeyChilliPotato" id="honeyChilliPotatoHalf" value="half">
            <label for="honeyChilliPotatoHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="honeyChilliPotato" id="honeyChilliPotatoFull" value="full">
            <label for="honeyChilliPotatoFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="honeyChilliPotatoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chilli Manchurian</span>
          <span class="item-price">₹70/₹110</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="chilliManchurian" id="chilliManchurianHalf" value="half">
            <label for="chilliManchurianHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="chilliManchurian" id="chilliManchurianFull" value="full">
            <label for="chilliManchurianFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="chilliManchurianQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chilli Paneer</span>
          <span class="item-price">₹80/₹150</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <input type="radio" name="chilliPaneer" id="chilliPaneerHalf" value="half">
            <label for="chilliPaneerHalf">Half</label>
          </div>
          <div class="option-group">
            <input type="radio" name="chilliPaneer" id="chilliPaneerFull" value="full">
            <label for="chilliPaneerFull">Full</label>
          </div>
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="chilliPaneerQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- French Fries Section -->
    <div class="menu-category">
      <h2>French Fries</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Classic Salt Fries</span>
          <span class="item-price">₹40</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="classicFriesQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Peri-Peri Fries</span>
          <span class="item-price">₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="periPeriFriesQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Loaded Fries</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="loadedFriesQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Maggi Section -->
    <div class="menu-category">
      <h2>Maggi</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Plain Maggi</span>
          <span class="item-price">₹40</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="plainMaggiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Maggi</span>
          <span class="item-price">₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieMaggiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Cheese Corn Maggi</span>
          <span class="item-price">₹60</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="cheeseCornMaggiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Butter Maggi</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieButterMaggiQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Pastry Section -->
    <div class="menu-category">
      <h2>Pastry</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Red Velvet</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="redVelvetPastryQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Black Forest</span>
          <span class="item-price">₹35</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="blackForestPastryQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Pineapple</span>
          <span class="item-price">₹30</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pineapplePastryQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butterscotch</span>
          <span class="item-price">₹35</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterscotchPastryQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Pizza Section -->
    <div class="menu-category">
      <h2>Pizza</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Fresh Pizza</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieFreshPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Margherita Special Pizza</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="margheritaPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Cheese Pizza</span>
          <span class="item-price">₹140</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerCheesePizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Corn Pizza</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="cornPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Tandoori Paneer Pizza</span>
          <span class="item-price">₹160</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="tandooriPaneerPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Farmhouse Pizza</span>
          <span class="item-price">₹200</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="farmhousePizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Garlic Bread</span>
          <span class="item-price">₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="garlicBreadQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Burger Pizza</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerBurgerPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Pineapple Pizza</span>
          <span class="item-price">₹130</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pineapplePizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Masala Pizza</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="masalaPizzaQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Burger Section -->
    <div class="menu-category">
      <h2>Burger</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Burger</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vegBurgerQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Burger</span>
          <span class="item-price">₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerBurgerQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Vada Pav</span>
          <span class="item-price">₹40</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vadaPavQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Special Vada Pav</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="specialVadaPavQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sandwich Section -->
    <div class="menu-category">
      <h2>Sandwich</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Grill Sandwich (2 pcs)</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vegGrillSandwich2Qty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Grill Sandwich (4 pcs)</span>
          <span class="item-price">₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vegGrillSandwich4Qty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Grilled Sandwich (2 pcs)</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerGrillSandwich2Qty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Grilled Sandwich (4 pcs)</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerGrillSandwich4Qty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Hot & Cold Coffee Section -->
    <div class="menu-category">
      <h2>Hot & Cold Coffee</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Black Coffee</span>
          <span class="item-price">₹30</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="blackCoffeeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Hot Coffee</span>
          <span class="item-price">₹35</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="hotCoffeeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Cappuccino</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="cappuccinoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Espresso</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="espressoQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Hot Chocolate</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="hotChocolateQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Hazelnut Cappuccino</span>
          <span class="item-price">₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="hazelnutCappuccinoQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Chai Section -->
    <div class="menu-category">
      <h2>Chai</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Kulhad Chai</span>
          <span class="item-price">₹20</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="kulhadChaiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Masala Chai</span>
          <span class="item-price">₹25</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="masalaChaiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Lemon Tea</span>
          <span class="item-price">₹25</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="lemonTeaQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Special Tea (Malai)</span>
          <span class="item-price">₹30</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="specialTeaQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Cold Drinks & Shakes Section -->
    <div class="menu-category">
      <h2>Cold Drinks & Shakes</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Cold Coffee</span>
          <span class="item-price">₹50</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="coldCoffeeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Hazelnut Cold Coffee</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="hazelnutColdCoffeeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Mango Shake</span>
          <span class="item-price">₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="mangoShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Strawberry Shake</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="strawberryShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Oreo Shake</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="oreoShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Chocolate Shake</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="chocolateShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Butterscotch Shake</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="butterscotchShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">KitKat Milkshake</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="kitkatShakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Vanilla Milkshake</span>
          <span class="item-price">₹90</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="vanillaMilkshakeQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Mango Lassi</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="mangoLassiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Strawberry Lassi</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="strawberryLassiQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Sweet Lassi</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="sweetLassiQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Wrap Section -->
    <div class="menu-category">
      <h2>Wrap</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Paneer Tikka Wrap</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="paneerTikkaWrapQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veggie Wrap</span>
          <span class="item-price">₹100</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="veggieWrapQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Simply Veg Wrap</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="simplyVegWrapQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Combo Offers Section -->
    <div class="menu-category">
      <h2>Combo Offers</h2>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">French Fries + Hot Coffee</span>
          <span class="item-price">₹70</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="friesCoffeeComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Burger + French Fries + Cold Drink</span>
          <span class="item-price">₹110</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="burgerFriesDrinkComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Burger + Cold Drink</span>
          <span class="item-price">₹75</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="burgerDrinkComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Burger + French Fries + Cold Coffee</span>
          <span class="item-price">₹160</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="burgerFriesCoffeeComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Burger + Onion Pizza + Cold Drink</span>
          <span class="item-price">₹200</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="burgerPizzaDrinkComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Fried Rice + Chilli Paneer</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="riceChilliPaneerComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Manchurian + Paneer Noodle</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="manchurianNoodleComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Pizza + Cold Drink</span>
          <span class="item-price">₹160</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pizzaDrinkComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Margherita Pizza + Onion Pizza + Corn Pizza</span>
          <span class="item-price">₹300</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pizzaTripleComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">Veg Pizza + Cold Coffee</span>
          <span class="item-price">₹180</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pizzaCoffeeComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">2 Pyaz Paratha + 2 Chai</span>
          <span class="item-price">₹140</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="pyazParathaChaiComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">2 Aloo Paratha + 2 Chai</span>
          <span class="item-price">₹120</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="alooParathaChaiComboQty" min="0" value="0">
          </div>
        </div>
      </div>
      
      <div class="menu-item">
        <div class="item-header">
          <span class="item-name">2 Slice Veg Sandwich + French Fries</span>
          <span class="item-price">₹80</span>
        </div>
        <div class="item-options">
          <div class="option-group">
            <label>Qty:</label>
            <input type="number" name="sandwichFriesComboQty" min="0" value="0">
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="actions">
    <button id="generateInvoice">Generate Invoice</button>
    <button id="resetOrder">Reset Order</button>
  </div>
  
  <div id="invoice">
    <div class="invoice-header">
      <h2>Invoice</h2>
      <span id="invoiceDate"></span>
    </div>
    <div class="invoice-items" id="invoiceItems">
      <div class="no-items">No items selected</div>
    </div>
    <div class="invoice-total" id="invoiceTotal">Total: ₹0</div>
  </div>
  <button id="printInvoice" style="display: none;">Print Invoice</button>

  <script>
    document.getElementById('generateInvoice').addEventListener('click', function() {
      const invoiceItems = document.getElementById('invoiceItems');
      invoiceItems.innerHTML = '';
      
      let total = 0;
      let hasItems = false;
      
      // Process all menu items
      document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.querySelector('.item-name').textContent;
        const priceText = item.querySelector('.item-price').textContent;
        const qtyInput = item.querySelector('input[type="number"]');
        const qty = parseInt(qtyInput.value);
        
        if (qty > 0) {
          hasItems = true;
          
          // Handle items with radio options (half/full)
          const radioGroup = item.querySelector('input[type="radio"]:checked');
          let price = 0;
          
          if (radioGroup) {
            const priceParts = priceText.split('/');
            price = radioGroup.value === 'half' ? 
              parseInt(priceParts[0].replace('₹', '')) : 
              parseInt(priceParts[1].replace('₹', ''));
          } else {
            // Single price items
            price = parseInt(priceText.replace('₹', ''));
          }
          
          const itemTotal = price * qty;
          total += itemTotal;
          
          const invoiceItem = document.createElement('div');
          invoiceItem.className = 'invoice-item';
          invoiceItem.innerHTML = `
            <span>${itemName} (${qty})</span>
            <span>₹${itemTotal}</span>
          `;
          invoiceItems.appendChild(invoiceItem);
        }
      });
      
      if (hasItems) {
        document.getElementById('invoiceTotal').textContent = `Total: ₹${total}`;
        document.getElementById('invoice').style.display = 'block';
        
        // Set current date
        const now = new Date();
        document.getElementById('invoiceDate').textContent = now.toLocaleString();
      } else {
        invoiceItems.innerHTML = '<div class="no-items">No items selected</div>';
        document.getElementById('invoiceTotal').textContent = 'Total: ₹0';
      }
    });
    
    document.getElementById('resetOrder').addEventListener('click', function() {
      // Reset all quantity inputs
      document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = 0;
      });
      
      // Uncheck all radio buttons
      document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
      });
      
      // Reset invoice display
      document.getElementById('invoiceItems').innerHTML = '<div class="no-items">No items selected</div>';
      document.getElementById('invoiceTotal').textContent = 'Total: ₹0';
      document.getElementById('invoice').style.display = 'none';
    });
  </script>
</body>
</html>
