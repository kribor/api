*** Settings ***

Library         HttpLibrary.HTTP
Library         Selenium2Library
Test Setup      Create HTTP Context     https://${TEST_TARGET}:443/

*** Test Cases ***

Error if GET before connect
    [Setup]  No Operation
    Run Keyword And Expect Error
    ...  Not connected to any HTTP Host. Use "Create HTTP Context" keyword first.
    ...  GET   /

Error if invalid URL
    [Setup]  No Operation
    Run Keyword And Expect Error
    ...  "NEITHER_URL_NOR_PATH" needs to be in form of "/path" or "http://host/path"
    ...  GET   NEITHER_URL_NOR_PATH

Open test browser
    Open browser  https://${TEST_TARGET}:443/

Page should contain Hello World!
    Page should contain  Hello World!

Close test browser
    Close all browsers
