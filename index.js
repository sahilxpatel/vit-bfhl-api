const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const FULL_NAME = "ajani_sahil";  
const DOB = "04062003";           
const EMAIL = "ajanisahil2022@vitbhopal.ac.in";
const ROLL_NUMBER = "22BCE11337";


const isIntegerish = (v) => {

  if (typeof v === 'number' && Number.isInteger(v)) return true;
  if (typeof v === 'string') {
    const t = v.trim();
    if (t === '') return false;
    // reject floats like "3.5"
    return /^-?\d+$/.test(t);
  }
  return false;
};

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid request format. 'data' must be an array."
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let all_alphabets_string = '';

    for (const item of data) {
      if (isIntegerish(item)) {
        const n = Number(item);
        sum += n;
        (Math.abs(n) % 2 === 0 ? even_numbers : odd_numbers).push(String(n));
      } else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        all_alphabets_string += item; 
      } else {
        special_characters.push(String(item));
      }
    }

    const concat_string = all_alphabets_string
      .split('')
      .reverse()
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join('');

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
