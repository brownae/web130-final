import '../admin/model.js';
import {displayAwardsTable} from '../admin/view.js';
//import {awards} from '../award/app.js';



$("[name='page-select']").change(function(event){

    console.log("selector changed!");
    let value = $(this).val();
switch(value) {
    case 'about':
        $('#tableContent').empty();//clears what was in div before
        console.log("about block!");
        break;
    case 'awards':
        $('#tableContent').empty();//clears what was in div before

        $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: getAllAwards
                }),
                contentType: 'application/json',
                success: function(response) {
                    awards = [];
                    if (response.hasOwnProperty('data')) {
                        let awardEdges = response.data.viewer.allAwards.edges;
                        for (var award of awardEdges) {
                            awards.push(award.node);
                        }
                    }
                    //console.log(awards);
                    displayAwardsTable(awards);
                }
        });
        console.log(awards);
        break;
    case 'menu':
        $('#tableContent').empty();//clears what was in div before
        console.log("menu block!");
        break;
    default:
        // code block

}

});
