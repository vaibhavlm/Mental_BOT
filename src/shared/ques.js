/* each entry in the const question should have three attributes
 id : it identifies each step of the conversation
message : the text that will be displayed on the ui
trigger: contains the id of the next step in the conversation to trigger that
options : an array that contains attributes to present options to the user to select from in the ui (similar to select element in form)
[
    {
        value: value of the current option
        label : label that will be displayed in the ui
        trigger: id of next step 
    }
]
if u want the user to enter some text assign user attribute as true and the value enterd by the user can be accessed by {previousValue} attribute
*/

export const questions = [
    {
        id: "Greet",
        message: "Hello! 👋 I'm Chatbot, I'll help you with the information about coronavirus(COVID-19)",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please type your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Ask Lang"
    },
    {
        id: "Ask Lang",
        message: "HI! {previousValue} Please select your prefered language",
        trigger: "Choose Language"
    },
    {
        id: "Choose Language",

        options: [
            {
                value: "English",
                label: "English",
                trigger: "Corona Check"
            },
            {
                value: "हिन्दी বাংলা",
                label: "हिन्दी",
                trigger: "Corona Check"
            },
            {
                value: "Dutch",
                label: "Dutch",
                trigger: "Corona Check"
            },
        ]
    },
     {
       id:"Corona Check",
       options :[
         {
           value:"Check",
           label: "Check yourself against corona",
           trigger: "Disclaimer"
         }
       ]
     },
    {
        id: "Disclaimer",
       message: " Disclaimer Our coronavirus assessment test has been developed based on guidelines from World Health Organization, This should not be taken as expert advice",
       trigger: "Ask age"
    },
    {
        id: "Ask age",
        message: "Please select your age",
        trigger: "Age"
    },
    {
        id: "Age",
        options: [
            {
                value: "<10",
                label: "<10 yrs",
                trigger: "Asking for Tomatoes in Pizza"
            },
            {
                value: ">15 && <=35",
                label: "Between age 16 yrs and 35",
                trigger: "Asking for Tomatoes in Pizza"
            },
            {
                value: ">35 && <=70",
                label: "Between age 35 yrs and 70",
                trigger: "Asking for Tomatoes in Pizza"
            },
            {
                value: ">70",
                label: "greater than 70 yrs",
                trigger: "Asking for Tomatoes in Pizza"
            }
        ]
    },
    {
        id: "Asking for Tomatoes in Pizza",
        message: "Would you like to have tomatoes in your pizza",
        trigger: "Adding Tomatoes in Pizza"
    },
    {
        id: "Adding Tomatoes in Pizza",
        options: [
            {
                value: true,
                label: "Yes",
                trigger: () => {

                    return "Asking for Mushroom in Pizza"
                }
            },
            {
                value: "false",
                label: "No",
                trigger: "Asking for Mushroom in Pizza"
            }
        ]
    },

    {
        id: "Asking for Mushroom in Pizza",
        message: "Would you like to have mushroom in your pizza",
        trigger: "Adding Mushroom in Pizza"
    },

    {
        id: "Adding Mushroom in Pizza",
        options: [
            {
                value: true,
                label: "Yes",
                trigger: () => {

                    return "Asking for Corn in Pizza"
                }
            },
            {
                value: "false",
                label: "No",
                trigger: "Asking for Corn in Pizza"
            }
        ]
    },
    {
        id: "Asking for Corn in Pizza",
        message: "Would you like to have corn in your pizza",
        trigger: "Adding Corn in Pizza"
    },

    {
        id: "Adding Corn in Pizza",
        options: [
            {
                value: true,
                label: "Yes",
                trigger: () => {

                    return "Asking for Veggies in Pizza"
                }
            },
            {
                value: "false",
                label: "No",
                trigger: "Asking for Veggies in Pizza"
            }
        ]
    },

    {
        id: "Asking for Veggies in Pizza",
        message: "Would you like to have veggies in your pizza",
        trigger: "Adding Veggies in Pizza"
    },

    {
        id: "Adding Veggies in Pizza",
        options: [
            {
                value: true,
                label: "Yes",
                trigger: () => {
                    return "Done"
                }
            },
            {
                value: "false",
                label: "No",
                trigger: "Done"
            }
        ]
    },
    {
        id: "Done",
        message: "Have a great day !!",
        end: true
    }
]