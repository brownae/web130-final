// queries for the admin section are currently being pulled in from the model of their section

//make this create about
export const createAbout = `
    mutation createAboutQuery($input: CreateAboutInput!) {
        createAbout(input: $input) {
            changedAbout {
                id
                modifiedAt
                createdAt
                content
                displayOrder
                title
                name
                imgName
            }
        }
    }`;
