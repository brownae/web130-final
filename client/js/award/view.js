// this is the page where I say get element by id and put $thisVar in that spot.



export let displayAwards = (awards) => {
    awards.forEach(function(award) {
        //console.log(award);

        const awardTemplate = `
            <article>
                <div class="img-award">
                    <a href="${award.awardSrcUrl}">
                        <img src="img/${award.imgName}" alt="${award.awardFrom}">
                    </a>
                </div>
                <div class="content-award">
                    <h3><span>Award: </span>${award.awardTitle}</h3>
                    <h4><span>From: </span>${award.awardFrom}</h4>
                    <h4><span>Date: </span>${award.dateAwarded}</h4>
                    <p>${award.comments}</p>
                </div>
            </article>

        `;

        $('#awardsPage').append(awardTemplate);
    });
        // $elem = $('#article-'+ (i + 1));
        // $elem.find('h1, h2').html(article.title);
        // $elem.find('article').html(article.content);
};
