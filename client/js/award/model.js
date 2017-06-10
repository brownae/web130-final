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
                        imgUrl
                        awardTitle
                        dateAwarded
                    }
                }
            }
        }
    }`;

$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllAwards
        }),
        contentType: 'application/json',
        success: function(response) {
            let awards = [];
            if (response.hasOwnProperty('data')) {
                let awardEdges = response.data.viewer.allArticles.edges;
                for (var award of awardEdges) {
                    awards.push(award.node);
                }
            }
            console.log(awards);
            displayArticles(awards);
        }
});
