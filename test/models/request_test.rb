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
require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
