 Merge Discontinuous Time Ranges - Node.js Module

## 📋 Problem Description
This Node.js module merges overlapping or nearly continuous time ranges into sorted, non-overlapping intervals.  
If the gap between two ranges is smaller than a specified threshold, they are treated as continuous and merged.

Each time range is represented as `[start, end)`, where:
- `start` and `end` are UNIX timestamps in milliseconds.
- The range includes `start` but excludes `end`.

---

## 🚀 Features
- Merges overlapping and near-continuous time ranges.
- Accepts an adjustable gap threshold.
- Returns clean, sorted, non-overlapping output.
- Implemented in pure JavaScript (no external dependencies).

🧠 How It Works

Sort the input ranges by their start time.

Iterate through the list, merging ranges that overlap or have a gap smaller than the threshold.

Return the final merged list of ranges.


🧑‍💻 Author
Dipti
Email:deeptitalan956@gmail.com
