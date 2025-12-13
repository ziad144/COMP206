# 🏥 دليل شرح نظام إدارة الصيدلية - الجزء الثالث
**دليلك الكامل لشرح Reports & Sales Scenes!**

---

## 📋 جدول المحتويات
1. [نظرة عامة](#نظرة-عامة)
2. [الأساسيات: FXML و Controller](#الأساسيات)
3. [استخدام SceneBuilder](#scenebuilder)
4. [واجهة التقارير (Reports)](#واجهة-التقارير)
5. [واجهة المبيعات (Sales)](#واجهة-المبيعات)
6. [شرح ملف CSS](#شرح-css)

---

## 🎯 نظرة عامة {#نظرة-عامة}

### الفلسفة
**Reports** و **Sales** هما **قلب النظام!** 💓
- Sales = تسجيل المبيعات اليومية
- Reports = تحليل الأداء واتخاذ القرارات

---

## 📚 الأساسيات {#الأساسيات}

### مفهوم MVC في JavaFX
```
Model (البيانات) → Controller (المنطق) → View (العرض)
    ↑                      ↓                    ↓
Database  ←───────── Business Logic ←──── FXML
```

---

## 🎨 استخدام SceneBuilder {#scenebuilder}

### ليه استخدمناه؟
- **سرعة التصميم** ⚡
- **Preview فوري** 👀
- **أقل أخطاء** ✅

---

## 📊 واجهة التقارير (Reports Scene) {#واجهة-التقارير}

### نظرة عامة
Reports Scene مصممة لـ:
- **توليد تقارير المبيعات**
- **رسم graphs الأرباح**
- **عرض التنبيهات** (expired products, low stock)

---

## 📄 شرح ملف ReportsView.fxml

### البنية: 3 Cards في GridPane

```xml
<GridPane hgap="20" vgap="20">
    <columnConstraints>
        <ColumnConstraints percentWidth="33.33"/>
        <ColumnConstraints percentWidth="33.33"/>
        <ColumnConstraints percentWidth="33.33"/>
    </columnConstraints>
    
    <!-- Card #1: Sales Reports -->
    <VBox styleClass="card" GridPane.columnIndex="0"/>
    
    <!-- Card #2: Profit Analysis -->
    <VBox styleClass="card" GridPane.columnIndex="1"/>
    
    <!-- Card #3: Alerts Summary -->
    <VBox styleClass="card" GridPane.columnIndex="2"/>
</GridPane>
```

**الشرح:**
- `GridPane` = شبكة من Rows و Columns
- `percentWidth="33.33"` = كل column بياخد **33.33% من العرض**
- **النتيجة:** 3 cards متساوية جنب بعض!

---

## 💡 الفكرة الذكية #1: Card للتقارير

### Card #1: Sales Reports
```xml
<VBox styleClass="card" spacing="15" GridPane.columnIndex="0">
    <padding><Insets top="20" right="20" bottom="20" left="20"/></padding>
    
    <Label text="📊 Sales Reports" 
           style="-fx-font-size: 18px; -fx-font-weight: bold;"/>
    
    <Label text="Generate comprehensive sales reports" 
           wrapText="true" 
           style="-fx-text-fill: #7f8c8d;"/>
    
    <DatePicker fx:id="salesReportDate" 
                promptText="Select date" 
                maxWidth="Infinity"/>
    
    <Button text="Generate Sales Report" 
            styleClass="btn, btn-primary" 
            maxWidth="Infinity" 
            onAction="#handleGenerateSalesReport"/>
</VBox>
```

**الشرح - عنصر عنصر:**

**السطر 1:** `<VBox styleClass="card" ...>`
- `card` = style في CSS بيدي شكل بطاقة بظل جميل

**السطر 4-5:** العنوان
```xml
<Label text="📊 Sales Reports" style="-fx-font-size: 18px; ..."/>
```
- **Emoji** (📊) = يخلي الواجهة أجمل وأوضح!
- `font-size: 18px` = كبير وواضح

**السطر 7-9:** الوصف
```xml
<Label text="Generate comprehensive sales reports" wrapText="true" .../>
```
- `wrapText="true"` = لو النص طويل، يلف على سطر جديد
- `text-fill: #7f8c8d` = رمادي فاتح (مش مهم زي العنوان)

**السطر 11-13:** DatePicker
```xml
<DatePicker fx:id="salesReportDate" promptText="Select date" maxWidth="Infinity"/>
```
- `DatePicker` = component لاختيار التاريخ 📅
- `maxWidth="Infinity"` = خليه ياخد كل العرض المتاح

**السطر 15-18:** الزرار
```xml
<Button text="Generate Sales Report" 
        styleClass="btn, btn-primary" 
        maxWidth="Infinity" 
        onAction="#handleGenerateSalesReport"/>
```
- `maxWidth="Infinity"` = خلي الزرار wide (يملأ العرض)
- `onAction="#handleGenerateSalesReport"` = لما أضغط، نادي على الـ function

---

### Card #2: Profit Analysis (نفس التصميم)
```xml
<VBox styleClass="card" GridPane.columnIndex="1">
    <Label text="💰 Profit Analysis" .../>
    <Label text="Generate profit graphs and charts" .../>
    <DatePicker fx:id="profitReportDate" .../>
    <Button text="Generate Profit Graph" 
            styleClass="btn, btn-success" 
            onAction="#handleGenerateProfitGraph"/>
</VBox>
```

**الفرق الوحيد:**
- `btn-success` بدل `btn-primary` (أخضر بدل أزرق!)

---

### Card #3: Alerts Summary
```xml
<VBox styleClass="card" GridPane.columnIndex="2">
    <Label text="⚠️ Alerts Summary" .../>
    <Label text="View all system alerts and warnings" .../>
    
    <Button fx:id="checkAlertsButton" 
            text="🔔 Check System Alerts" 
            styleClass="btn, btn-warning" 
            maxWidth="Infinity" 
            onAction="#handleViewAlerts"/>
    
    <Label fx:id="lastAlertCheckLabel" 
           text="Last checked: Never" 
           style="-fx-text-fill: #95a5a6; -fx-font-size: 11px;"/>
</VBox>
```

**الفكرة الذكية:**
- **مفيش DatePicker!** - التنبيهات دايماً للوضع الحالي
- **Last checked label** - يوضح امتى آخر مرة فحصنا

---

## 💡 الفكرة الذكية #2: منطقة عرض التقرير

```xml
<VBox styleClass="card" spacing="15" VBox.vgrow="ALWAYS">
    <padding><Insets top="20" right="20" bottom="20" left="20"/></padding>
    
    <HBox alignment="CENTER_LEFT" spacing="10">
        <Label text="📄 Report Output" 
               style="-fx-font-size: 18px; -fx-font-weight: bold;"/>
        <Region HBox.hgrow="ALWAYS"/>
        <Button text="Clear" 
                styleClass="btn, btn-secondary" 
                onAction="#handleClearOutput"/>
    </HBox>
    
    <TabPane VBox.vgrow="ALWAYS" tabClosingPolicy="UNAVAILABLE">
        <Tab text="Text Report">
            <TextArea fx:id="reportOutputArea" 
                      editable="false" 
                      wrapText="true" 
                      prefHeight="500"
                      style="-fx-font-family: 'Courier New'; -fx-font-size: 12px;"/>
        </Tab>
    </TabPane>
</VBox>
```

**الشرح:**

**السطر 13-20:** TextArea داخل Tab
```xml
<TextArea fx:id="reportOutputArea" 
          editable="false" 
          wrapText="true" 
          style="-fx-font-family: 'Courier New'; ..."/>
```

**ليه الخصائص دي؟**
- `editable="false"` = **read-only** - مينفعش المستخدم يعدل!
- `wrapText="true"` = لف النص الطويل
- `font-family: 'Courier New'` = **monospace font** - مناسب للتقارير!

**مثال:**
```
Courier New (monospace):
Product        Qty    Price
Panadol        10     50.00
Aspirin        5      25.00

Arial (proportional):
Product        Qty    Price
Panadol        10     50.00
Aspirin        5      25.00  ← مش منظم!
```

---

## 💻 شرح ملف ReportsController.java

---

## 💡 الفكرة الذكية #1: توليد تقرير المبيعات

```java
@FXML
private void handleGenerateSalesReport() {
    LocalDate date = salesReportDate.getValue();
    
    if (date == null) {
        date = LocalDate.now();  // Today بشكل افتراضي
    }
    
    try {
        // استدعاء ReportGenerator
        String reportFileName = reports.ReportGenerator.generateSalesReport(date);
        
        if (reportFileName != null) {
            displayReportOutput(reportFileName);
            showSuccess("Sales report generated successfully!");
        } else {
            showError("Generation Failed", "Failed to generate sales report.");
        }
        
    } catch (Exception e) {
        showError("Error", "An error occurred: " + e.getMessage());
        ExceptionLogger.logException(e, "Error generating sales report");
    }
}
```

**الشرح - خطوة خطوة:**

**الخطوة 1: جلب التاريخ**
```java
LocalDate date = salesReportDate.getValue();
```
- `.getValue()` = اجلب التاريخ المختار من الـ DatePicker
- `LocalDate` = class بيمثل تاريخ (بدون وقت)

**الخطوة 2: Default للـ Today**
```java
if (date == null) {
    date = LocalDate.now();
}
```
- لو المستخدم مختارش تاريخ → استخدم اليوم

**الخطوة 3: استدعاء ReportGenerator**
```java
String reportFileName = reports.ReportGenerator.generateSalesReport(date);
```
- `ReportGenerator` = class منفصل بيولد التقارير
- يرجع **اسم الملف** (مثلاً: `sales_report_2024-12-13.txt`)

**الخطوة 4: عرض التقرير**
```java
if (reportFileName != null) {
    displayReportOutput(reportFileName);
    showSuccess("Report generated!");
}
```

---

## 💡 الفكرة الذكية #2: عرض محتوى التقرير

```java
private void displayReportOutput(String fileName) {
    try {
        Path filePath = Paths.get(fileName);
        
        if (!Files.exists(filePath)) {
            showError("File Not Found", "Report file not found: " + fileName);
            return;
        }
        
        List<String> lines = Files.readAllLines(filePath);
        String content = String.join("\n", lines);
        
        reportOutputArea.setText(content);
        
    } catch (IOException e) {
        showError("Error Reading File", e.getMessage());
        ExceptionLogger.logException(e, "Error reading report file");
    }
}
```

**الشرح:**

**الخطوة 1: التحقق من وجود الملف**
```java
Path filePath = Paths.get(fileName);
if (!Files.exists(filePath)) {
    showError("File Not Found", ...);
    return;
}
```

**الخطوة 2: قراءة كل الأسطر**
```java
List<String> lines = Files.readAllLines(filePath);
```
- يقرأ **كل الأسطر** من الملف في قائمة

**الخطوة 3: دمج الأسطر**
```java
String content = String.join("\n", lines);
```
- `String.join("\n", ...)` = ادمج القائمة بـ new line بينهم

**مثال:**
```java
lines = ["Line 1", "Line 2", "Line 3"]
content = "Line 1\nLine 2\nLine 3"
```

**الخطوة 4: عرض في TextArea**
```java
reportOutputArea.setText(content);
```

---

## 💡 الفكرة المتقدمة #1: Periodic Alert Check

```java
private void setupPeriodicAlertCheck() {
    Timeline timeline = new Timeline(
        new KeyFrame(Duration.minutes(5), event -> {
            checkAlertsAutomatically();
        })
    );
    timeline.setCycleCount(Timeline.INDEFINITE);
    timeline.play();
}
```

**الشرح:**
- `Timeline` = أداة لتنفيذ شيء **بشكل دوري**
- `Duration.minutes(5)` = كل 5 دقائق
- `setCycleCount(INDEFINITE)` = استمر للأبد (مش مرة واحدة)
- `play()` = ابدأ!

**النتيجة:**
- كل 5 دقائق → فحص التنبيهات تلقائياً
- لو فيه حاجة منتهية أو قليلة → نبه المستخدم!

---

## 💡 الفكرة المتقدمة #2: System Alerts

```java
@FXML
private void handleViewAlerts() {
    try {
        List<String> alerts = new ArrayList<>();
        
        // 1. فحص المنتجات المنتهية
        String expiredSql = "SELECT p.Name, b.expire_date " +
                           "FROM batch b " +
                           "JOIN product p ON b.Product_parcode = p.parcode " +
                           "WHERE b.expire_date < CURDATE() AND b.Quantaty > 0";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(expiredSql);
             ResultSet rs = ps.executeQuery()) {
            
            int expiredCount = 0;
            while (rs.next()) {
                expiredCount++;
                String name = rs.getString("Name");
                String expiry = rs.getString("expire_date");
                alerts.add("⚠️ EXPIRED: " + name + " (Expired on: " + expiry + ")");
            }
            
            if (expiredCount > 0) {
                alerts.add(0, "===== " + expiredCount + " EXPIRED PRODUCTS =====\n");
            }
        }
        
        // 2. فحص المخزون القليل
        String lowStockSql = "SELECT p.Name, SUM(i.Quntaty) as qty, i.ReorderLevel " +
                            "FROM inventory_has_product i " +
                            "JOIN product p ON i.Product_parcode = p.parcode " +
                            "GROUP BY p.parcode, p.Name, i.ReorderLevel " +
                            "HAVING qty <= i.ReorderLevel";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(lowStockSql);
             ResultSet rs = ps.executeQuery()) {
            
            int lowStockCount = 0;
            while (rs.next()) {
                lowStockCount++;
                String name = rs.getString("Name");
                double qty = rs.getDouble("qty");
                int reorder = rs.getInt("ReorderLevel");
                
                alerts.add("📉 LOW STOCK: " + name + 
                          " (Qty: " + qty + ", Reorder: " + reorder + ")");
            }
            
            if (lowStockCount > 0) {
                alerts.add(0, "\n===== " + lowStockCount + " LOW STOCK ITEMS =====\n");
            }
        }
        
        // 3. عرض النتائج
        if (alerts.isEmpty()) {
            reportOutputArea.setText("✅ All Clear! No alerts at this time.");
        } else {
            reportOutputArea.setText(String.join("\n", alerts));
        }
        
        // 4. تحديث Last Checked
        lastAlertCheckLabel.setText("Last checked: " + 
            LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        
    } catch (SQLException e) {
        showError("Database Error", e.getMessage());
        ExceptionLogger.logException(e, "Error checking alerts");
    }
}
```

**الشرح - نظام التنبيهات:**

**الجزء 1: Products المنتهية**
```sql
SELECT p.Name, b.expire_date 
FROM batch b 
WHERE b.expire_date < CURDATE() AND b.Quantaty > 0
```
- `CURDATE()` = التاريخ الحالي
- `expire_date < CURDATE()` = منتهي!
- `Quantaty > 0` = وفيه كمية موجودة (لازم نتخلص منها!)

**الجزء 2: Low Stock**
```sql
SELECT p.Name, SUM(i.Quntaty) as qty, i.ReorderLevel 
HAVING qty <= i.ReorderLevel
```
- `SUM(i.Quntaty)` = إجمالي الكمية
- `HAVING qty <= ReorderLevel` = قليل!

**الجزء 3: التنسيق**
```java
alerts.add("⚠️ EXPIRED: " + name + " (Expired on: " + expiry + ")");
```
- استخدام **Emojis** (⚠️📉✅) = يخلي الرسالة واضحة!

**النتيجة:**
```
===== 3 EXPIRED PRODUCTS =====

⚠️ EXPIRED: Panadol (Expired on: 2024-11-01)
⚠️ EXPIRED: Aspirin (Expired on: 2024-10-15)
⚠️ EXPIRED: Vitamin C (Expired on: 2024-09-20)

===== 2 LOW STOCK ITEMS =====

📉 LOW STOCK: Insulin (Qty: 5, Reorder: 20)
📉 LOW STOCK: Bandages (Qty: 10, Reorder: 50)
```

---

## 🛒 واجهة المبيعات (Sales Scene) {#واجهة-المبيعات}

### التحدي: POS System كامل! 💰

**POS** = Point of Sale (نقطة البيع)
- إضافة منتجات للسلة
- حساب الإجمالي
- خصومات
- نقاط العملاء
- طباعة الفاتورة

---

## 📄 شرح ملف SalesView.fxml

### البنية: جزئين جنب بعض

```xml
<HBox spacing="20" VBox.vgrow="ALWAYS">
    
    <!-- الجزء الأيسر: السلة -->
    <VBox spacing="15" HBox.hgrow="ALWAYS" styleClass="card">
        <!-- Product Input + Cart Table -->
    </VBox>
    
    <!-- الجزء الأيمن: Checkout -->
    <VBox spacing="15" prefWidth="350" styleClass="card">
        <!-- Totals + Customer + Buttons -->
    </VBox>
    
</HBox>
```

**التصميم:**
```
+---------------------------+  +------------------+
|   Product Input           |  |  Checkout        |
|   [Barcode Field]         |  |  Subtotal: 100   |
|   [Add Button]            |  |  Discount: 10    |
|                           |  |  TOTAL: 90       |
|   Cart Table:             |  |                  |
|   - Product               |  |  Customer: ...   |
|   - Price                 |  |                  |
|   - Qty                   |  |  [Confirm Sale]  |
|   - Total                 |  |  [Clear All]     |
|   - Action                |  |  [Sale Return]   |
+---------------------------+  +------------------+
```

---

## 💡 الفكرة الأساسية: Product Input

```xml
<HBox spacing="10" alignment="CENTER_LEFT">
    <Label text="Product:"/>
    <TextField fx:id="barcodeField" 
               promptText="Scan Barcode or Enter Name..." 
               HBox.hgrow="ALWAYS" 
               onAction="#handleAddItem"/>
    <Button text="➕ Add" 
            styleClass="btn, btn-primary" 
            onAction="#handleAddItem"/>
</HBox>
```

**الفكرة:**
- **TextField واحد** للباركود **أو** الاسم!
- `onAction` على الـ TextField = لما تضغط **Enter** → أضف!
- الزرار = نفس الـ function (`handleAddItem`)

---

## 💡 الفكرة الأساسية: Cart Table

```xml
<TableView fx:id="cartTable" VBox.vgrow="ALWAYS">
    <columns>
        <TableColumn text="Product" prefWidth="200" fx:id="colName"/>
        <TableColumn text="Price" prefWidth="80" fx:id="colPrice"/>
        <TableColumn text="Qty" prefWidth="80" fx:id="colQty"/>
        <TableColumn text="Total" prefWidth="100" fx:id="colTotal"/>
        <TableColumn text="Action" prefWidth="80" fx:id="colAction"/>
    </columns>
</TableView>
```

**الأعمدة:**
- **Product**: اسم المنتج
- **Price**: سعر الوحدة
- **Qty**: الكمية (editable!)
- **Total**: Price × Qty (محسوب تلقائياً)
- **Action**: زرار Remove (🗑️)

---

## 💡 الفكرة الأساسية: Checkout Panel

```xml
<VBox spacing="15" prefWidth="350" styleClass="card">
    <Label text="Checkout Details" style="-fx-font-size: 18px; ..."/>
    
    <GridPane vgap="10" hgap="10">
        <Label text="Subtotal:" GridPane.columnIndex="0" GridPane.rowIndex="0"/>
        <Label fx:id="subtotalLabel" text="0.00" 
               GridPane.columnIndex="1" GridPane.rowIndex="0" 
               style="-fx-font-weight: bold;"/>
        
        <Label text="Discount:" GridPane.columnIndex="0" GridPane.rowIndex="2"/>
        <TextField fx:id="discountField" text="0" prefWidth="80" 
                   GridPane.columnIndex="1" GridPane.rowIndex="2"/>
        
        <Separator GridPane.columnSpan="2" GridPane.rowIndex="3"/>
        
        <Label text="TOTAL:" GridPane.columnIndex="0" GridPane.rowIndex="4" 
               style="-fx-font-size: 16px; -fx-font-weight: bold;"/>
        <Label fx:id="totalLabel" text="0.00" 
               GridPane.columnIndex="1" GridPane.rowIndex="4" 
               style="-fx-font-size: 16px; -fx-font-weight: bold; -fx-text-fill: #2ecc71;"/>
    </GridPane>
    
    <VBox spacing="10">
        <Label text="Customer (Optional):"/>
        <TextField fx:id="customerField" promptText="Customer ID / Phone"/>
    </VBox>
    
    <Button text="✓ Confirm Sale" 
            styleClass="btn, btn-success" 
            maxWidth="Infinity" 
            style="-fx-font-size: 16px; -fx-padding: 15; ..." 
            onAction="#handleCheckout"/>
    
    <Button text="✕ Clear All" 
            styleClass="btn, btn-danger" 
            maxWidth="Infinity" 
            onAction="#handleCancel"/>
    
    <Button text="↩ Sale Return" 
            style="-fx-background-color: #f1c40f; -fx-text-fill: white; ..." 
            onAction="#handleReturn"/>
</VBox>
```

**ملاحظات:**
- **Total باللون الأخضر** = يلفت النظر!
- **الأزرار كبيرة** (`font-size: 16px`, `padding: 15`) = سهل تضغطها!
- **Sale Return بلون أصفر** = مختلف عن Confirm و Cancel

---

## 💻 شرح ملف SalesController.java

---

## 💡 الفكرة الذكية #1: Autocomplete للمنتجات

```java
private void setupAutocompletion() {
    barcodeField.textProperty().addListener((obs, oldVal, newVal) -> {
        if (newVal != null && newVal.length() >= 2) {
            // البحث في Database
            String sql = "SELECT Name, parcode FROM product " +
                        "WHERE Name LIKE ? OR activeingredients LIKE ? " +
                        "LIMIT 10";
            
            try (Connection conn = DBConnection.getConnection();
                 PreparedStatement ps = conn.prepareStatement(sql)) {
                
                ps.setString(1, "%" + newVal + "%");
                ps.setString(2, "%" + newVal + "%");
                
                ResultSet rs = ps.executeQuery();
                List<Product> suggestions = new ArrayList<>();
                
                while (rs.next()) {
                    Product p = new Product();
                    p.setName(rs.getString("Name"));
                    p.setBarcode(rs.getString("parcode"));
                    suggestions.add(p);
                }
                
                // عرض الاقتراحات (ContextMenu مثلاً)
                showSuggestions(suggestions);
                
            } catch (SQLException e) {
                ExceptionLogger.logException(e, "Error in autocomplete");
            }
        }
    });
}
```

**الفكرة:**
- بحث **Live** في Database
- بالاسم **أو** المادة الفعالة
- عرض **اقتراحات** للصيدلي

---

## 💡 الفكرة الذكية #2: إضافة منتج للسلة

```java
@FXML
private void handleAddItem() {
    String input = barcodeField.getText().trim();
    
    if (input.isEmpty()) {
        showError("Input Required", "Please enter product barcode or name.");
        return;
    }
    
    try (Connection conn = DBConnection.getConnection()) {
        
        // 1. البحث بالباركود أولاً
        String sql = "SELECT parcode, Name, Price FROM product WHERE parcode = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, input);
        ResultSet rs = ps.executeQuery();
        
        String barcode, name;
        double price;
        
        if (rs.next()) {
            // وجدنا بالباركود!
            barcode = rs.getString("parcode");
            name = rs.getString("Name");
            price = rs.getDouble("Price");
            
        } else {
            // البحث بالاسم
            sql = "SELECT parcode, Name, Price FROM product WHERE Name LIKE ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, "%" + input + "%");
            rs = ps.executeQuery();
            
            if (rs.next()) {
                barcode = rs.getString("parcode");
                name = rs.getString("Name");
                price = rs.getDouble("Price");
            } else {
                showError("Not Found", "Product not found: " + input);
                return;
            }
        }
        
        // 2. فحص: المنتج موجود في السلة؟
        Optional<CartItem> existing = cartList.stream()
            .filter(item -> item.getBarcode().equals(barcode))
            .findFirst();
        
        if (existing.isPresent()) {
            // زود الكمية
            CartItem item = existing.get();
            item.setQuantity(item.getQuantity() + 1);
            cartTable.refresh();  // حدث الجدول
            
        } else {
            // أضف جديد
            CartItem newItem = new CartItem();
            newItem.setBarcode(barcode);
            newItem.setName(name);
            newItem.setPrice(price);
            newItem.setQuantity(1);
            
            cartList.add(newItem);
        }
        
        updateTotals();  // حساب الإجمالي
        barcodeField.clear();  // امسح الحقل
        barcodeField.requestFocus();  // رجع الفوكس
        
    } catch (SQLException e) {
        showError("Database Error", e.getMessage());
        ExceptionLogger.logException(e, "Error adding item to cart");
    }
}
```

**الشرح - الذكاء:**

**1. البحث المرن:**
- أول حاجة: بحث بالباركود (exact match)
- لو مفيش: بحث بالاسم (partial match)

**2. تجنب التكرار:**
```java
Optional<CartItem> existing = cartList.stream()
    .filter(item -> item.getBarcode().equals(barcode))
    .findFirst();
```
- لو المنتج **موجود** → زود الكمية
- لو **مش موجود** → أضف جديد

**3. UX ممتازة:**
```java
barcodeField.clear();
barcodeField.requestFocus();
```
- امسح الحقل بعد الإضافة
- رجع الفوكس عشان يضيف المنتج التالي مباشرة!

---

## 💡 الفكرة الأساسية #3: حساب الإجمالي

```java
private void updateTotals() {
    double subtotal = cartList.stream()
        .mapToDouble(item -> item.getPrice() * item.getQuantity())
        .sum();
    
    double discount = 0;
    try {
        discount = Double.parseDouble(discountField.getText());
    } catch (NumberFormatException e) {
        discount = 0;
    }
    
    double total = subtotal - discount;
    
    subtotalLabel.setText(String.format("%.2f", subtotal));
    totalLabel.setText(String.format("%.2f", total));
}
```

**الشرح - Java Streams:**

```java
double subtotal = cartList.stream()
    .mapToDouble(item -> item.getPrice() * item.getQuantity())
    .sum();
```

**خطوة خطوة:**
1. `cartList.stream()` = حول القائمة لـ stream
2. `.mapToDouble(...)` = لكل item، احسب (Price × Qty)
3. `.sum()` = اجمع كل النتائج

**مثال:**
```java
Cart:
- Panadol: 10 × 2 = 20
- Aspirin: 5 × 3 = 15
- Vitamin: 8 × 1 = 8

subtotal = 20 + 15 + 8 = 43
```

---

## 💡 الفكرة المتقدمة #1: Checkout (حفظ البيع)

```java
@FXML
private void handleCheckout() {
    if (cartList.isEmpty()) {
        showError("Empty Cart", "Please add items to cart first.");
        return;
    }
    
    Connection conn = null;
    try {
        conn = DBConnection.getConnection();
        conn.setAutoCommit(false);  // بداية Transaction!
        
        // 1. إنشاء Invoice
        String insertInvoice = "INSERT INTO invoice (Date, price, employee_Person_ID) " +
                              "VALUES (?, ?, ?)";
        
        PreparedStatement psInv = conn.prepareStatement(insertInvoice, 
                                                        Statement.RETURN_GENERATED_KEYS);
        
        psInv.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));
        
        double total = Double.parseDouble(totalLabel.getText());
        psInv.setDouble(2, total);
        
        String empId = SessionManager.getInstance().getUserId();
        psInv.setString(3, empId);
        
        psInv.executeUpdate();
        
        // جلب الـ Invoice ID المولد
        ResultSet generatedKeys = psInv.getGeneratedKeys();
        int invoiceId = 0;
        if (generatedKeys.next()) {
            invoiceId = generatedKeys.getInt(1);
        }
        
        // 2. إضافة كل Item في الـ Cart
        String insertItem = "INSERT INTO invoice_has_batch " +
                           "(Invoice_ID, Batch_Batch_number, quantity) " +
                           "VALUES (?, ?, ?)";
        
        PreparedStatement psItem = conn.prepareStatement(insertItem);
        
        for (CartItem item : cartList) {
            // جلب Batch مناسب (FEFO)
            String batchNumber = getBatchForProduct(conn, item.getBarcode(), item.getQuantity());
            
            if (batchNumber == null) {
                throw new SQLException("No batch available for: " + item.getName());
            }
            
            psItem.setInt(1, invoiceId);
            psItem.setString(2, batchNumber);
            psItem.setDouble(3, item.getQuantity());
            psItem.addBatch();
            
            // تقليل الكمية من الـ Batch
            BatchManager.reduceQuantityFromBatches(conn, item.getBarcode(), item.getQuantity());
        }
        
        psItem.executeBatch();
        
        // 3. تسجيل في Treasury
        String insertTreasury = "INSERT INTO treasury (Date, price, description, employee_ID) " +
                               "VALUES (?, ?, ?, ?)";
        
        PreparedStatement psTreasury = conn.prepareStatement(insertTreasury);
        psTreasury.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));
        psTreasury.setDouble(2, total);  // موجب = دخول فلوس!
        psTreasury.setString(3, "Sale - Invoice #" + invoiceId);
        psTreasury.setString(4, empId);
        psTreasury.executeUpdate();
        
        // 4. معالجة العميل (Points)
        String customerId = customerField.getText().trim();
        if (!customerId.isEmpty()) {
            processCustomerPoints(conn, customerId, total);
        }
        
        conn.commit();  // نجحت كل الخطوات!
        
        showSuccess("Sale completed successfully! Invoice #" + invoiceId);
        
        // طباعة الفاتورة (optional)
        printInvoice(invoiceId);
        
        // Clear Cart
        cartList.clear();
        updateTotals();
        customerField.clear();
        
    } catch (Exception e) {
        if (conn != null) {
            try {
                conn.rollback();  // فشل؟ إلغاء كل حاجة!
            } catch (SQLException rollbackEx) {
                ExceptionLogger.logException(rollbackEx, "Rollback failed");
            }
        }
        
        showError("Checkout Failed", e.getMessage());
        ExceptionLogger.logException(e, "Error during checkout");
        
    } finally {
        if (conn != null) {
            try {
                conn.setAutoCommit(true);
                conn.close();
            } catch (SQLException e) {
                ExceptionLogger.logException(e, "Error closing connection");
            }
        }
    }
}
```

**الشرح - Transaction الكاملة:**

**لحظة! ليه Transaction؟**
```
تخيل: البيع نجح، لكن تقليل الكمية فشل!
النتيجة: فاتورة موجودة، لكن المخزون مغلوط! 💥

الحل: Transaction!
يا كل حاجة تنجح، يا كل حاجة تفشل.
```

**الخطوات:**

**1. إنشاء Invoice**
```java
INSERT INTO invoice (Date, price, employee_Person_ID) VALUES (?, ?, ?)
```
- `RETURN_GENERATED_KEYS` = رجع الـ ID المولد

**2. ربط المنتجات**
```java
INSERT INTO invoice_has_batch (Invoice_ID, Batch_Batch_number, quantity) ...
```
- لكل item في الـ Cart
- `executeBatch()` = ننفذ كل الـ inserts دفعة واحدة (أسرع!)

**3. تسجيل في Treasury**
```java
INSERT INTO treasury (Date, price, ...) VALUES (?, ?, ...)
```
- **price موجب** = دخول فلوس (بيع)

**4. نقاط العميل**
```java
processCustomerPoints(conn, customerId, total);
```
- إضافة نقاط للعميل حسب المبلغ

---

## 💡 الفكرة المتقدمة #2: Sale Return (مرتجع المبيعات)

```java
@FXML
private void handleReturn() {
    TextInputDialog dialog = new TextInputDialog();
    dialog.setTitle("Sale Return");
    dialog.setHeaderText("Enter Invoice ID to return:");
    dialog.setContentText("Invoice ID:");
    
    dialog.showAndWait().ifPresent(idStr -> {
        try {
            int invoiceId = Integer.parseInt(idStr);
            processReturn(invoiceId);
            
        } catch (NumberFormatException e) {
            showError("Invalid Input", "Please enter a valid invoice ID.");
        }
    });
}

private void processReturn(int invoiceId) {
    Connection conn = null;
    try {
        conn = DBConnection.getConnection();
        conn.setAutoCommit(false);
        
        // 1. جلب الفاتورة الأصلية
        String getInvoice = "SELECT price FROM invoice WHERE ID = ?";
        PreparedStatement ps = conn.prepareStatement(getInvoice);
        ps.setInt(1, invoiceId);
        ResultSet rs = ps.executeQuery();
        
        if (!rs.next()) {
            showError("Not Found", "Invoice not found!");
            return;
        }
        
        double originalPrice = rs.getDouble("price");
        
        // 2. جلب Items
        String getItems = "SELECT ib.Batch_Batch_number, ib.quantity, b.Product_parcode " +
                         "FROM invoice_has_batch ib " +
                         "JOIN batch b ON ib.Batch_Batch_number = b.Batch_number " +
                         "WHERE ib.Invoice_ID = ?";
        
        ps = conn.prepareStatement(getItems);
        ps.setInt(1, invoiceId);
        rs = ps.executeQuery();
        
        List<ReturnItem> items = new ArrayList<>();
        while (rs.next()) {
            ReturnItem item = new ReturnItem();
            item.setBatchNumber(rs.getString("Batch_Batch_number"));
            item.setQuantity(rs.getDouble("quantity"));
            item.setBarcode(rs.getString("Product_parcode"));
            items.add(item);
        }
        
        // 3. إنشاء Invoice سالبة
        String insertReturn = "INSERT INTO invoice (Date, price, employee_Person_ID) " +
                             "VALUES (?, ?, ?)";
        
        ps = conn.prepareStatement(insertReturn, Statement.RETURN_GENERATED_KEYS);
        ps.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));
        ps.setDouble(2, -originalPrice);  // سالب!
        ps.setString(3, SessionManager.getInstance().getUserId());
        ps.executeUpdate();
        
        rs = ps.getGeneratedKeys();
        int returnInvoiceId = 0;
        if (rs.next()) {
            returnInvoiceId = rs.getInt(1);
        }
        
        // 4. إرجاع الكميات للـ Batches
        for (ReturnItem item : items) {
            BatchManager.addQuantityToBatch(conn, item.getBatchNumber(), item.getQuantity());
        }
        
        // 5. تسجيل في Treasury (سالب)
        String insertTreasury = "INSERT INTO treasury (Date, price, description, employee_ID) " +
                               "VALUES (?, ?, ?, ?)";
        
        ps = conn.prepareStatement(insertTreasury);
        ps.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));
        ps.setDouble(2, -originalPrice);  // سالب = خروج فلوس!
        ps.setString(3, "Return - Invoice #" + invoiceId);
        ps.setString(4, SessionManager.getInstance().getUserId());
        ps.executeUpdate();
        
        conn.commit();
        
        showSuccess("Return processed successfully! Return Invoice #" + returnInvoiceId);
        
    } catch (Exception e) {
        if (conn != null) {
            try {
                conn.rollback();
            } catch (SQLException ex) {
                ExceptionLogger.logException(ex, "Rollback failed");
            }
        }
        
        showError("Return Failed", e.getMessage());
        ExceptionLogger.logException(e, "Error processing return");
    }
}
```

**الفكرة:**
- المرتجع = **عكس البيع** تماماً!

**المقارنة:**
```
Sale:
- Invoice: +100
- Batches: -5 (تقليل)
- Treasury: +100 (دخول فلوس)

Return:
- Invoice: -100 (سالب!)
- Batches: +5 (زيادة)
- Treasury: -100 (خروج فلوس)
```

---

## 💡 الخلاصة: ليه Transactions مهمة؟

### بدون Transaction:
```
1. Insert Invoice ✅
2. Update Batches ✅
3. Insert Treasury ❌ ERROR!

النتيجة: فاتورة موجودة، Batches متحدثة، لكن Treasury مفيش! 💥
```

### مع Transaction:
```
1. conn.setAutoCommit(false)
2. Insert Invoice
3. Update Batches
4. Insert Treasury
5. conn.commit() OR conn.rollback()

النتيجة: كل حاجة تنجح أو كل حاجة تفشل! ✅
```

---

## 🎨 شرح CSS {#شرح-css}

**(نفس الشرح من الملفات السابقة)**

---

## 🎓 نصائح للمناقشة

### عند شرح Reports:
**س: إزاي بتولد التقارير؟**
> بنستخدم ReportGenerator class بيعمل query على الـ Database ويكتب النتائج في ملف text. بعدين بنعرض الملف في TextArea.

**س: ليه Periodic Check للـ Alerts؟**
> عشان نلاحظ المشاكل قبل ما تكبر. لو منتج قرب ينتهي أو المخزون قل، النظام ينبهنا تلقائياً.

### عند شرح Sales:
**س: إزاي بتضمنوا Data Integrity؟**
> باستخدام Transactions. كل عملية بيع فيها خطوات كتير (Invoice, Batches, Treasury). لو أي خطوة فشلت، كل حاجة ترجع زي ما كانت.

**س: إزاي بتتعامل مع الـ Batches في البيع؟**
> بنستخدم FEFO (First Expire First Out). بنبيع من الدفعة اللي هتنتهي الأول. ده بيقلل الـ waste.

**س: إزاي المرتجع بيشتغل؟**
> المرتجع = عكس البيع. ننشئ Invoice سالبة، نرجع الكمية للـ Batch، ونسجل في Treasury بقيمة سالبة (خروج فلوس).

---

## 🚀 بالتوفيق!

**تفتكر:**
- **Reports** = التحليل واتخاذ القرارات
- **Sales** = قلب النظام (POS)
- **Transactions** = الأمان والدقة
- **FEFO** = تقليل الـ waste

**خليك واثق ومركز - ده أهم جزء في النظام! 💪**
