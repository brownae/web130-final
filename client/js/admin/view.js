
// Awards table Start ///////////////
//the displayAwardsTable function is what makes the view for awards on the admin page.
export let displayAwardsTable = (award) => {
    let table =
    `<table>
        <tr>
            <th>Award Title</th>
            <th>Img URL</th>
            <th>From</th>
            <th>Award src URL</th>
            <th>Date Awarded</th>
            <th>comments</th>

        </tr>`;

        awards.forEach(function(award) {
        table +=  `<tr>
                <td>${award.awardTitle}</td>
                <td>${award.imgName}</td>
                <td>${award.awardFrom}</td>
                <td>${award.awardSrcUrl}</td>
                <td>${award.dateAwarded}</td>
                <td>${award.comments}</td>
                <td><a href="" id='${award.id}' >Update</a>
                <a href="" id='${award.id}' >Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <button type="button" name="update-button" class='addEntry'>Add</button>
        `;

    $('#tableContent').append(table);//loads what is requested

};


// Awards table End ///////////////
