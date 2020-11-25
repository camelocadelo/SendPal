# == Schema Information
#
# Table name: payments
#
#  id         :bigint           not null, primary key
#  payer_id   :integer          not null
#  payee_id   :integer          not null
#  amount     :float            not null
#  note       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Payment < ApplicationRecord
    validates :payer_id, :payee_id, :amount, :note, presence: true
    validates :amount, numericality: true

    belongs_to :payer,
        foreign_key: :payer_id,
        class_name: 'User'

    belongs_to :payee,
        foreign_key: :payee_id,
        class_name: 'User'

end
