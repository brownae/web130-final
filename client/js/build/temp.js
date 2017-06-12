import { getAllAbouts } from '../about/model';
import { displayAbouts } from '../about/view';


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
            console.log(abouts);
            displayAbouts(abouts);
        }
});

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

import { getAllAwards } from '../award/model';
import { displayAwards } from '../award/view';


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
            displayAwards(awards);
        }
});

$(function() { // DOM Ready
    // Insert all scripts here

    $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();

        //Prevent other nav-dropdowns from opening when one is clicked
        $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
    });

    //this makes the menu hide again if someone clicks outside of the nav(ie on the html)
    $('html').click(function() {
        $('.nav-dropdown').hide();
    });

    //toggles the mobile X and hamburger
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });

    $('#nav-toggle').click(function() {
        $('nav ul').toggle();
        $('nav').toggleClass('active-nav');
        console.log('Test');
    });

    $(document).scroll(function () {
     var $nav = $("nav");
     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
   });
//test
});
