# == Schema Information
#
# Table name: requests
#
#  id           :bigint           not null, primary key
#  requestor_id :integer          not null
#  requestee_id :integer          not null
#  amount       :float            not null
#  note         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Request < ApplicationRecord
    validates :requestor_id, :requestee_id, :amount, :note, presence: true
    validates :amount, numericality: true

    belongs_to :requestor,
        foreign_key: :requestor_id,
        class_name: 'User'

    belongs_to :requestee,
        foreign_key: :requestee_id,
        class_name: 'User'
end
