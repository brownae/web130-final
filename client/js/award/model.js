//this is where I query the db and get the info and put it in a var

// All articles
export const getAllAwards = `
    query getAllAwards {
        viewer {
            allAwards{
                edges {
                    node {
                        id
                        modifiedAt
                        createdAt
                        awardFrom
                        awardSrcUrl
                        imgName
                        awardTitle
                        dateAwarded
                        comments
                    }
                }
            }
        }
    }`;
