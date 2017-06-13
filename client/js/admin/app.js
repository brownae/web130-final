import '../admin/model.js';
import '../about/model.js';
import '../menu/model.js';
import {displayAwardsTable} from '../admin/view.js';
import {displayAboutsTable} from '../admin/view.js';
import {displayMenuForm} from '../admin/view.js';
//import {awards} from '../award/app.js';



$("[name='page-select']").change(function(event){

    console.log("selector changed!");
    let value = $(this).val();
switch(value) {
    case 'about':
        $('#tableContent').empty();//clears what was in div before
        console.log("about block!");
        $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: getAllAbouts
                }),
                contentType: 'application/json',
                success: function(response) {
                    abouts = [];
                    if (response.hasOwnProperty('data')) {
                        let aboutEdges = response.data.viewer.allAbouts.edges;
                        for (var about of aboutEdges) {
                            abouts.push(about.node);
                        }
                    }
                    displayAboutsTable(abouts);
                }
        });
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
        break;
    case 'menu':
        $('#tableContent').empty();//clears what was in div before
        console.log("menu block!");

        $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: getAllMenus
                }),
                contentType: 'application/json',
                success: function(response) {
                    menus = [];
                    if (response.hasOwnProperty('data')) {
                        let menuEdges = response.data.viewer.allMenus.edges;
                        for (var menu of menuEdges) {
                            menus.push(menu.node);
                        }
                    }
                    //console.log(menus);
                    displayMenuForm(menus);
                }
        });

        break;
    default:
        $('#tableContent').empty();//clears what was in div before
        // code block

}

});
