@requests.each do |request|
    json.set! request.id do 
        json.id request.id
        json.amount request.amount
        json.note request.note
        json.requestor_id request.requestor_id
        json.requestee_id request.requestee_id
        json.date request.created_at
    end
end