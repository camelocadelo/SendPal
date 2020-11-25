json.request do
    json.partial! "api/requests/request", request: @request
end

json.requestor do
    json.extract! @requestor, :id, :balance, :email
end
json.requestee do
    json.extract! @requestee, :id, :balance, :email
end