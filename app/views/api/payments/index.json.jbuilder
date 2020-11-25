@payments.each do |payment|
    json.set! payment.id do 
        json.id payment.id
        json.amount payment.amount
        json.note payment.note
        json.payer_id payment.payer_id
        json.payee_id payment.payee_id
        json.date payment.created_at
    end
end
