<?php include('includes/header.php');?>
<header>
    <img class="top-img" src="img/canon-seattle-about.jpg" alt="Canon Seattle bar">
    <div>
        <h2>Login</h2>
    </div>
</header>
<main id="admin-page">
    <form action="#" method="post" class="">
        <div class="form-group">
            <select name="page-select">
                <option value="null"></option>
                <option value="about">About</option>
                <option value="awards">Awards</option>
                <option value="menu">Menu</option>
            </select>
        </div>
    </form>

    <div id="content">
        <table>
            <tr>
                <th>Award Title</th>
                <th>Img URL</th>
                <th>From</th>
                <th>Award src URL</th>
                <th>Date Awarded</th>
                <th>comments</th>

            </tr>
            <tr>
                <td>Best Bar 2017</td>
                <td>True</td>
                <td>James Beard Awards</td>
                <td>True</td>
                <td>07/08/2017</td>
                <td>A great thanks to James Beard Awards!</td>
            </tr>
        </table>
        <!-- <form id="awards-update" action="" method="post">
            <div class="form-group">
                <label for="imgUrl">Image URL</label>
                <input type="url" class="form-control" id="imgUrl" name="imgUrl" value="https://drive.google.com/file/d/0B3oOmzu0QCWBa19pbjlYQnNJMkU/view?usp=sharing">
            </div>
            <div class="form-group">
                <label for="awardTitle">Award Title</label>
                <input type="text" class="form-control" id="awardTitle" name="awardTitle" value="Best Bar 2017">
            </div>
            <div class="form-group">
                <label for="awardFrom">Award from</label>
                <input type="text" class="form-control" id="awardFrom" name="awardFrom" value="James Beard Awards">
            </div>
            <div class="form-group">
                <label for="awardSrcUrl">Award Source Url</label>
                <input type="url" class="form-control" id="awardSrcUrl" name="awardSrcUrl" value="https://www.jamesbeard.org/blog/2016-jbf-restaurant-and-chef-award-semifinalists">
            </div>
            <div class="form-group">
                <label for="dateAwarded">Date Awarded</label>
                <input type="date" class="form-control" id="dateAwarded" name="dateAwarded" value="mm/dd/yyyy">
            </div>
            <div class="form-group">
                <label for="comments">Comments</label>
                <input type="text" class="form-control" id="comments" name="comments" value="A great thanks to James Beard Awards!">
            </div>
            <div class="form-group">
                <button type="button" name="update-button">Update</button>
            </div>

        </form> -->

    </div>


</main>
<?php include('includes/footer.php');?>
