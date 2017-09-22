*** Settings ***

Library         HttpLibrary.HTTP

*** Keywords ***

Get Root
    Wait Until Keyword Succeeds    1 min    5 sec     GET    https://${TEST_TARGET}/

*** Test Cases ***

Public interface accessible
    When Get Root
    Then Request was successful
     And Response Body Should Contain    Hello