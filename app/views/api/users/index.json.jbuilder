@users.each do |user|
    json.set! user.id do 
        json.id user.id
        json.email user.email
        json.balance user.balance
    end
end