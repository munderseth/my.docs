---
sidebar_position: 1
---

# Notes

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

## Images

- `SVG` - Scalable Vector Graphics in an **XML-based** vector image format
- `transparent background` - nothing in the background pixels

The following is a tool used to convert `img` to `svg` - https://picsvg.com/


### Webp to PNG

- File Conversion (i.e. wepb -> png) - https://convertio.co/
  - use the tool to convert `wepb` to `png`; Safari 13 does not support `wepb`

## Upgrading WSL
WSL - Windows Subsystem Linux

- https://dev.to/adityakanekar/upgrading-from-wsl1-to-wsl2-1fl9 - how to upgrade
- [reset password](https://itsfoss.com/reset-linux-password-wsl/)

### Setup

- https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl
- https://scottspence.com/posts/use-chrome-in-ubuntu-wsl - getting **Puppeteer** to launch

#### Environment Variables

- $ sudo vim ~/.bashrc
- Enter your password.
- Press i to go into edit mode. ...
- Add your variable as `export API_KEY=123` at the end of the file. ...
- Press esc key to get out of edit mode.
- Enter `:wq` and press enter . ...
- $ source ~/.bashrc