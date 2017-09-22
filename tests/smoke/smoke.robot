*** Settings ***

Library         HttpLibrary.HTTP

*** Keywords ***

Get Root
    Wait Until Keyword Succeeds    1 min    5 sec     GET    https://${TEST_TARGET}/
