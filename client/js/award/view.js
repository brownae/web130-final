// this is the page where I say get element by id and put $thisVar in that spot.
import 'award/model.js';

const awardTemplate = `
    <article>
        <div class="img-award">
            <img src="" alt="">
        </div>
        <div class="content-award">
            <h3><span>Award: </span></h3>
            <h4><span>From: </span>James Beard Foundation</h4>
            <h4><span>Date: </span>2/17/2016</h4>
            <!-- <p>We were truly honored to be a semifinalist for outstanding cocktail program for the 2016 James Beard Awards.</p> -->
        </div>
    </article>

`;


export let displayAwards = (awards) => {
    awards.forEach(function(award) {
        console.log(award);
        $('#awardsPage article').append(awardTemplate);
    });
        // $elem = $('#article-'+ (i + 1));
        // $elem.find('h1, h2').html(article.title);
        // $elem.find('article').html(article.content);
};
