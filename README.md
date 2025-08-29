# VIT BFHL API 🚀

This is a REST API built as part of the **Bajaj Finserv Health Full Stack Challenge – VIT**.  
The API accepts an array of mixed values and returns details such as user info, categorized arrays (odd, even, alphabets, special characters), sum of numbers, and a concatenated string of alphabets.

---

## 📌 Hosted URL
The API is live at:  
👉 [https://vit-bfhl-api-production.up.railway.app/bfhl](https://vit-bfhl-api-production.up.railway.app/bfhl)

---

## 📌 Features
- Accepts an array of inputs (numbers, alphabets, special characters).  
- Returns:
  - `is_success` flag  
  - `user_id` (format: `firstname_lastname_ddmmyyyy`)  
  - `email` and `roll_number`  
  - Arrays of **odd numbers, even numbers, alphabets, special characters**  
  - **Sum of numbers** (as string)  
  - **Concatenated reversed alternating caps string** of all alphabets  

---

## 📌 Example Request & Response

### Request
```json
POST /bfhl
Content-Type: application/json

{
  "data": ["a", "1", "334", "4", "R", "$"]
}
