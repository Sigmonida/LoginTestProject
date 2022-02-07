Feature: Login page

    Feature Description

    Try to login as a HR Admin or as a Manager with correct and incorrect login credentials.
    Check to see if you get logged in or if you get correct error message.

    Scenario: Login as HR Admin, happy path
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06+menadzer@gmail.com" "Su8um!ga" as "HR ADMIN"
        Then I should land on 4-box

    Scenario: Login as Manager, happy path
        #UI
        Given I am on the emprising login page
        When I login with username and password "visnjap06+login@gmail.com" "Su8um!ga" as "MANAGER"
        Then I should land on overview results page

    Scenario Outline: Login as HR Admin or Manager, unhappy path
        #UI
        Given I am on the emprising login page
        When I login with username and password <EMAIL> <PASSWORD> as <ROLE>
        Then I should get an <ERROR TYPE>
        And Get an <ERROR TYPE> error type with message: <ERROR MESSAGE>

        Examples:
            | EMAIL                          | PASSWORD   | ROLE       | ERROR TYPE   | ERROR MESSAGE                                     |
            | "visnjap06+menadzer@gmail.com" | "susumiga" | "HR ADMIN" | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap00@gmail.com"          | "Su8um!ga" | "HR ADMIN" | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap77@gmail.com"          | "lalala"   | "HR ADMIN" | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap06#gmail.com"          | "Su8um!ga" | "HR ADMIN" | "EMAIL"      | "The Email field is not a valid e-mail address."  |
            | "visnjap06+login@gmail.com"    | "lalala"   | "MANAGER"  | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap06+log@gmail.com"      | "Su8um!ga" | "MANAGER"  | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap06+log@gmail.com"      | "lalala"   | "MANAGER"  | "VALIDATION" | "We do not recognize your email and/or password." |
            | "visnjap06#gmail.com"          | "Su8um!ga" | "MANAGER"  | "EMAIL"      | "The Email field is not a valid e-mail address."  |