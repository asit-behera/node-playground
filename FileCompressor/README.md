# 📦 File Compressor

## 📝 Problem Statement

Build a **Node.js file compression tool** that takes an input file and compresses it using **Gzip**. The tool should:

- Reads a file named input.txt.
- Compress the file and save it with a `.gz` extension.
- Displays a message when the process is complete.
- Handle errors gracefully (e.g., file not found, permission issues).
- Display the original and compressed file sizes.

## 🚀 Bonus Challenges

- Add a decompression feature to restore the original file.

## To generate large file

```
tr -dc "A-Za-z 0-9" < /dev/urandom | fold -w100|head -n 100000 > large-file-10mb.txt
```
