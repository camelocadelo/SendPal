json.payment do 
    json.partial! "api/payments/payment", payment: @payment
end

json.payer do
    json.extract! @payer, :id, :balance, :email
end
json.payee do
    json.extract! @payee, :id, :balance, :email
end