# SendPal
# Overview
**A simple web application clone of PayPal to send and request transactions.**

The main functionality of the web application is to be able to pay any given amount of money to any user with an account, friend users, and view recent recent activity.  

SendPal uses Ruby on Rails/PostgreSQL on the backend with React/Redux on the frontend. This web application was fully designed and developed within a two-week time frame.

![image](https://github.com/iamtreetop/SendPal/blob/main/app/assets/images/readme/splash-page.png)

[SendPal Live](https://sendpal.herokuapp.com/#/)

# Technologies
* React/Redux
* Ruby on Rails
* PostgreSQL
* HTML
* CSS
* Javascript
* JQuery

# Features

## User Log-in

Users are presented with a clean and simple session form, which will allow them to either log in, create an account, or view the application through a Demo User.

[![Image from Gyazo](https://i.gyazo.com/ef8e3b9e9c7833d57e763e691c690b0b.gif)](https://gyazo.com/ef8e3b9e9c7833d57e763e691c690b0b)

## Dashboard

Upon logging into SendPal, the user is redirected to their very own dashboard, where they can view their current balance, send or request money, and view their pals.

![image](https://github.com/iamtreetop/SendPal/blob/main/app/assets/images/readme/dashboard.png)

## Payments

Users can send transactions to other users within the SendPal community.

[![Image from Gyazo](https://i.gyazo.com/91c37537a87fd851b3115e35d6034980.gif)](https://gyazo.com/91c37537a87fd851b3115e35d6034980)

## Requests

Users can request transactions from other users within the SendPal community, as well as, edit current requests.
[![Image from Gyazo](https://i.gyazo.com/7193d5758f8b2d85a30a0df70a839a3f.gif)](https://gyazo.com/7193d5758f8b2d85a30a0df70a839a3f)

To avoid N+1 queries, request data was prefetched in the backend prior to sending the response to the front-end. To maintain efficiency when fetching requests to be displayed on the dashboard, only the current user's requests were filtered and fetched from the database, while also updating the balance of both the requestor and requestee.

```js
    // request controller
    def edit 
        @request = Request.find(params[:id])
        render :show
    end

    def update
        @request = Request.find(params[:id])
        if @request.update(request_params)
            @requestor = User.find_by(id: @request.requestor_id)
            @requestee = User.find_by(id: @request.requestee_id)
            @requestor.update_attributes(balance: @requestor.balance + @request.amount)
            @requestee.update_attributes(balance: @requestee.balance - @request.amount)
            render :show
        else
            render json: @request.errors.full_messages, status: 400
        end
    end
```

In order to extract proper data and minimize run-time, data was methodically organized using jbuilder, then threaded down as part of a component's properties.

```js
    // edit request container
    const mapSTP = (state) => {
        let request = state.entities.requests[state.ui.modal.id];
        let requestee = state.entities.users[state.entities.requests[state.ui.modal.id].requestee_id]
        return ({
            currentUser: state.entities.users[state.session.id],
            request: request,
            requestee: requestee,
            formType: 'update_request',
            updateBalance: (balance) => state.ui.modal.balance(balance)
        })
    }

    const mapDTP = (dispatch) => {
        return ({
            fetchRequest: (requestId) => dispatch(fetchRequest(requestId)),
            updateRequest: (request) => dispatch(updateRequest(request)),
            closeModal: () => dispatch(closeModal()),
        });
    }
```

In the dashboard component, the current user can select any of his/her own requests to edit the request and get an updated balance. 

```js
    // dashboard component 
    
    // user's request list
    activityList = this.props.requests.map(
       (request, idx) => {
            return (
            <>
                <li 
                    onClick={() => this.props.openModal('request', request.id, this.updateBalance)}
                    key={idx} 
                    className="request-list-items">
                    <div className="request-list-header">
                        <div className="request-user">{allUsers[request.requestee_id].email}</div>
                        <div className="request-amount">+ ${request.amount}</div>
                    </div>
                    <div className="request-list-body">
                        <div className="request-body-items">
                            <div className="request-date">{request.date}</div>
                            <div className="request-note">"{request.note}"</div>
                        </div>
                    </div>
                </li>
            </>
            )
        }
    )
    
    // update current user's balance
    updateBalance(balance){
        this.setState({
            balance: this.state.balance + parseInt(balance)
        })
    }
```

## Challenges

# Future Features
* Notifications - Logged in users will receive notifications when another user sends or requests money
