# 0x08. React Redux reducer+selector

`Front-end` `JavaScript` `ES6` `React`
![reduce+selector](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/5b02610e1a538e005104.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220819T112417Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=707e6185460bb608dbbf96c87efd3ff02839dd4819963fe44cc0903542c3635d)

# Resources
**Read or watch:**

* [Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
* [Selectors](https://redux.js.org/introduction/learning-resources#selectors)
* [Writing tests](https://redux.js.org/usage/writing-tests)
* [Immutable Map documentation](https://immutable-js.com/docs/v4.1.0)
* [Normalizr](https://github.com/paularmstrong/normalizr)
* [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

# Learning Objectives
At the end of this project, you should be able to explain to anyone, without the help of **Google:**

* The purpose of a reducer and the role it plays within your application
* Why a reducer should stay as pure as possible
* Why mutations should not happen within a reducer
* The use of Immutable within the reducer
* The use of Normalizr within the app
* Selectors: what they are and when to use them

  

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11436" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11436">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Write a basic reducer
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <ul>
<li>Reuse the latest dashboard project you worked on in the React course <code>0x08-React_Redux_action_creator+normalizr</code></li>
</ul>

<p><strong>Create the basic state</strong></p>

<p>In a file named <code>reducers/uiReducer.js</code>, define the initial state of the reducer for the UI:</p>

<ul>
<li>It should have one boolean property <code>isNotificationDrawerVisible</code></li>
<li>It should have one boolean property <code>isUserLoggedIn</code></li>
<li>It should have one empty object <code>user</code></li>
</ul>

<p><strong>Create the reducer function</strong></p>

<p>In the same file, import all the actions that you created in the file <code>actions/uiActionTypes</code> and create a reducer function named <code>uiReducer</code>:</p>

<ul>
<li><code>DISPLAY_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>true</code></li>
<li><code>HIDE_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>false</code></li>
<li><code>LOGIN_SUCCESS</code> should set <code>isUserLoggedIn</code> to <code>true</code></li>
<li><code>LOGIN_FAILURE</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
<li><code>LOGOUT</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
</ul>

<p><strong>Write the tests</strong></p>

<p>In a file named <code>reducers/uiReducer.test.js</code>, define the test suite for our simple reducer:</p>

<ul>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when no action is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when the action <code>SELECT_COURSE</code> is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function,  when the action <code>DISPLAY_NOTIFICATION_DRAWER</code> is passed, changes correctly the <code>isNotificationDrawerVisible</code> property</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Don&rsquo;t forget to set up the default case in your switch function</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should not mutate the state within the reducer</li>
<li>You must use the spread operator to change the state</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_0/dashboard/src/reducers/uiReducer.js, task_0/dashboard/src/reducers/uiReducer.test.js</code></li>
        </ul>
      </div>