
export let displayMenus = (menus) => {
    menus.forEach(function(menu) {
        console.log(menu);

        const menuTemplate = `
            <li><a href="${menu.foodUrl}"  target="_blank" >Food</a></li>
            <li><a href="${menu.cocktailsUrl}"  target="_blank" >Cocktails</a></li>
            <li><a href="${menu.bottlesUrl}"  target="_blank" >Bottles</a></li>
        `;

        $('.menus').append(menuTemplate);
    });

};
