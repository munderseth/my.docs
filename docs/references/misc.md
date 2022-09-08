---
sidebar_position: 1
---

# Styling 

- [Indenting 2nd lin of List Items](https://silvawebdesigns.com/css-indenting-second-line-li-list-items/)

## Emojis
- Hex/HTML Codes - https://dev.to/rodrigoodhin/list-of-emojis-hex-codes-35ma
  - Example usage - &#x1F499; Blue Heart

## Excel

- To create a newline within a cell use `<alt><cr>`
- How to convert a *hyper-link* cell to plain text using the URL text
   - **ALT + F11** to open Microsoft Visual Basic
   - **Insert > Module**
   - Use the following code
     ```
        Sub Extracthyperlinks()
        'Updateby Extendoffice
        Dim Rng As Range
        Dim WorkRng As Range
        On Error Resume Next
        xTitleId = "KutoolsforExcel"
        Set WorkRng = Application.Selection
        Set WorkRng = Application.InputBox("Range", xTitleId, WorkRng.Address, Type:=8)
        For Each Rng In WorkRng
            If Rng.Hyperlinks.Count > 0 Then
                Rng.Value = Rng.Hyperlinks.Item(1).Address
            End If
        Next
        End Sub
     ```
  - Press **F5** to run the code
  - Link to the article - https://www.extendoffice.com/documents/excel/1177-excel-extract-hyperlink-from-cell.html

### CSV
TBD
