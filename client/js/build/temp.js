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

import { createAbout, createAward } from '../admin/model.js';
import {displayAwardsTable, displayAboutsTable, displayMenuForm, displayAboutForm, displayAwardsForm } from '../admin/view.js';

$("[name='page-select']").change(function(event){

    let value = $(this).val();

    switch(value) {
        case 'about':
            $('#tableContent').empty();//clears what was in div before
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

// this pops down the form to add a new about article
$(document).on('click', "#add-about-form", function() {
    displayAboutForm();
});
// this pops down the form to add a new award
$(document).on('click', "#add-award-form", function() {
    displayAwardsForm();
});

//create a new about article Start
let createInput = (displayOrder, name, title, imgName) => {
    return {
        "input": {
            "displayOrder": displayOrder,
            "name": name,
            "title": title,
            "imgName": imgName
        }
    };
};

$(document).on('click', '#create-about-button', function() {

    let displayOrder = $('#displayOrder').val(),
        name = $('#name').val(),
        title = $('#title').val(),
        imgName = $('#imgName').val(),
        data = createInput(displayOrder, name, title, imgName);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: createAbout,
            variables: data
        }),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        success: function(response) {
            if (response.hasOwnProperty('data')) {
                alert('You created a new about section!');
                $('form')[0].reset();
            }
        },
        error: function(xhr, status, response) {
            console.log(response);
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});
//create a new about article End
createNewAward();

function createNewAward(){
//create a new award article Start
    let createInput = (imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments) => {
        return {
            "input": {
                "imgName": imgName,
                "awardTitle": awardTitle,
                "awardFrom": awardFrom,
                "awardSrcUrl": awardSrcUrl,
                "dateAwarded": dateAwarded,
                "comments": comments
            }
        };
    };

    $(document).on('click', '#create-award-button', function() {

        let imgName = $('#imgName').val(),
            awardTitle = $('#awardTitle').val(),
            awardFrom = $('#awardFrom').val(),
            awardSrcUrl = $('#awardSrcUrl').val(),
            dateAwarded = $('#dateAwarded').val(),
            comments = $('#comments').val(),
            data = createInput(imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments );

        $.ajax({
            type: "POST",
            url: "https://us-west-2.api.scaphold.io/graphql/canon",
            data: JSON.stringify({
                query: createAward,
                variables: data
            }),
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            success: function(response) {
                if (response.hasOwnProperty('data')) {
                    alert('You created a new about section!');
                    $('form')[0].reset();
                }
            },
            error: function(xhr, status, response) {
                console.log(response);
                if (response.hasOwnProperty('errors')) {
                    alert(response.errors[0].message);
                }
            }
        });
    });
}
//create a new award article End

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

import '../login/view';

import { getAllMenus } from '../menu/model';
import { displayMenus } from '../menu/view';


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
            console.log(menus);
            displayMenus(menus);
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
