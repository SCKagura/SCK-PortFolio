---
title: UPBEAT Game – A Turn-Based Strategy Game
published: 2024-03-26
description: "An interactive turn-based strategy game developed with Java backend and HTML/CSS frontend design."
image: "/src/assets/images/UPBEAT/UPBEAT_MainScreen.png"
tags: ["Game Development", "Java", "Frontend", "Backend", "Turn-Based Game"]
category: Projects
draft: false
---

> **Cover Image**: *Custom Design for UPBEAT Game*

---

## 🎮 **Project Overview**

**UPBEAT Game** เป็นเกมวางแผนผลัดเทิร์นที่ผู้เล่นสามารถจัดการทรัพยากร, ลงทุนพื้นที่, และแข่งขันเพื่อเอาชนะเกม โดยระบบถูกพัฒนาด้วย **Java** สำหรับ Backend และออกแบบหน้าจอผู้เล่นด้วย **HTML/CSS** ในส่วนของ Frontend  

---

## 🔧 **Technologies Used**

| Component             | Technologies                   |
|-----------------------|--------------------------------|
| **Backend**           | Java (OOP, Parser AST)         |
| **Frontend**          | HTML, CSS                      |
| **Testing**           | JUnit 5                        |
| **Build Tools**       | Maven                          |
| **Version Control**   | Git & GitHub                   |

## **Team members**
*นายบุญญวุฒิ บุตรบุญ 650612088*

*นายพุฒิพงศ์ กุนาง 650612095*

*นายธีรภัทร์ ลำตาล 650610772*


## 🛠️ **Features**

### **1. Dynamic Map Generation**
- ระบบสร้างแผนที่ตามขนาดที่กำหนดในไฟล์ `config.txt` เช่น ขนาด `m x n`  
- ข้อมูลแผนที่ถูกจัดเก็บในคลาส `Region` โดยมีสถานะต่าง ๆ เช่น:  
   - **ตำแหน่ง**: `m` (แถว), `n` (คอลัมน์)  
   - **เงินฝาก**: `deposit`  
   - **เจ้าของพื้นที่**: `Player`  
   - **ดอกเบี้ย**: `interest`  

---

### **2. Player Actions**  
ผู้เล่นสามารถป้อนคำสั่งผ่าน **Parser** โดยระบบจะวิเคราะห์คำสั่งและสร้าง AST (Abstract Syntax Tree):  

| **คำสั่ง** | **การทำงาน**                      |
|------------|----------------------------------|
| `move`     | เคลื่อนที่ไปในทิศทางที่กำหนด         |
| `invest`   | ลงทุนในพื้นที่เพิ่มเงินฝาก          |
| `collect`  | เก็บผลตอบแทนจากการลงทุน            |
| `attack`   | โจมตีพื้นที่ของฝ่ายตรงข้าม          |
| `done`     | จบเทิร์นของผู้เล่น                 |

---

### **3. Interest Calculation**  

ดอกเบี้ยคำนวณตามสูตร:  
$$
\text{interest} = \text{base interest rate} \times \log_{10}
(\text{deposit}) \times \ln(\text{turn})
$$  
ระบบนี้ช่วยให้ผู้เล่นต้องวางแผนการลงทุนและบริหารเงินฝากอย่างรอบคอบ  

---

### **4. Frontend User Interface**  
- **Menu Screen**: หน้าเมนูหลัก  
- **Game Play Screen**: แสดงสถานะเกมและแผนที่  

- **Config Screen**: ตั้งค่าขนาดแผนที่และพารามิเตอร์เกม  



### 🧪 **Testing**
 **1. Configuration Test :**
ตรวจสอบการอ่านค่าพารามิเตอร์จากไฟล์ config.txt
```
@Test
public void testReadConfiguration() {
    Configuration config = Configuration.instance();
    assertEquals(5, config.m);
    assertEquals(5, config.n);
    assertEquals(10000, config.init_budget);
}
```
 **2. Player Move Test :**
ทดสอบคำสั่ง move สำหรับผู้เล่น:
```
@Test
public void testPlayerMove() {
    Player player = new Player(1);
    player.setX(2);
    player.setY(2);
    player.move("up");  
    assertEquals(1, player.getX());
    assertEquals(2, player.getY());
}
```
### 📸 **Screenshots**
**1. Menu Screen**
![ALT Text](/src/assets/images/UPBEAT/UPBEAT_MainScreen.png)
**2. Game Play Screen**
![ALT Text](/src/assets/images/UPBEAT/UPBEAT_Gameplay.png)
**3. Config Screen**
![ALT Text](/src/assets/images/UPBEAT/UPBEAT_ConfigScreen.png)


### 🚀 **How to Run the Project**

## **Backend Setup**
**1.Clone โปรเจคจาก GitHub:**
```
git clone https://github.com/SCKagura/OOP-Project-Group-16.git
cd OOP-Project-Group-16
```

**2.Build และรันโปรเจค:**
```
mvn clean install
java -jar target/UPBEATGame.jar
```

## Frontend Setup
เปิดไฟล์ index.html ในเบราว์เซอร์
ตรวจสอบการเชื่อมต่อกับ Backend

### 🎯**Challenges and Solutions**
**1. การเชื่อมต่อ Frontend กับ Backend**
ปัญหา: ต้องเชื่อม API เพื่อรับส่งข้อมูลเกมระหว่าง Frontend และ Backend
แนวทางแก้ไข: เตรียม RESTful API สำหรับการส่งคำสั่งผู้เล่นและสถานะเกม

**2. Parser Logic**
ปัญหา: รองรับคำสั่งที่ซับซ้อนผ่าน AST
แนวทางแก้ไข: ใช้ Abstract Syntax Tree (AST) ในการวิเคราะห์และประมวลผลคำสั่ง

### 🔮 **Future Improvements**
1.เชื่อมต่อ Frontend กับ Backend ผ่าน API

2.เพิ่มระบบ AI Opponent สำหรับเล่นคนเดียว

3.พัฒนา Multiplayer Mode รองรับผู้เล่นหลายคน

4.ปรับปรุง UI/UX ให้มีความโต้ตอบผ่าน JavaScript

### **Project Paper**
[Project Paper](/src/assets/Files/UPBEAT/Final_Project_Report_UPBEAT.pdf)

### 🔗 **GitHub Repository**
[Github Repo](https://github.com/SCKagura/OOP-Project-Group-16.git)

### 👨‍💻 **Contributing**
หากสนใจพัฒนาหรือเพิ่มฟีเจอร์ใหม่ สามารถ Fork และ Pull Request หรือรายงานปัญหาได้ที่ GitHub Issues

### 📝 **Conclusion**
โปรเจค UPBEAT Game แสดงให้เห็นถึงการออกแบบระบบเกมที่ชัดเจน โดยใช้หลักการ OOP และมีโครงสร้างที่ยืดหยุ่น รองรับการพัฒนาฟีเจอร์ในอนาคต ทั้ง Backend และ Frontend ทำให้โปรเจคนี้มีความน่าสนใจและพร้อมใช้งานสำหรับการขยายต่อ