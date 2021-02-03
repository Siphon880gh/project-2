<span class="page-title-dynamic d-none">{{pageTitle}}</span> <!-- Remove line when refactored into production code -->
<div class="form-wrapper">
    <header class="form-header">
        Sign up
    </header>
    <div class="form-body">
        <form class="signup-form">
            <div class="input-group">
            <label for="username-signup">Username:</label>
            <input type="text" id="username-signup" />
            </div>
            <div class="input-group">
            <label for="password-signup">Password:</label>
            <input type="password" id="password-signup" />
            </div>
            <div>
            <button class="standout" type="submit" onclick="alert('Prototype: Would signup');" data-route="/signup">Sign Up!</button>
            <a href="javascript:void(0);" onclick="hasher.setHash('login/')" data-route="/login">Login instead</a>
            </div>
        </form>
    </div> <!-- form-body -->
</div> <!-- form-wrapper -->