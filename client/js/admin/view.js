
// Awards table Start ///////////////

export let displayAwardsTable = (award) => {

    let rows =
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
        rows +=  `<tr>
                <td>${award.awardTitle}</td>
                <td>${award.imgName}</td>
                <td>${award.awardFrom}</td>
                <td>${award.awardSrcUrl}</td>
                <td>${award.dateAwarded}</td>
                <td>${award.comments}</td>
                <td><a href="" id='${award.id}' >Update</a></td>
        </tr>`;
        });


        rows += `</table>`;

        // rows.before(tableHead).append(tableEnd).val();

    $('#tableContent').append(rows);//loads what is requested

};


// Awards table End ///////////////
