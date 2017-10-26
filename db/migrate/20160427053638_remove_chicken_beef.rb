class RemoveChickenBeef < ActiveRecord::Migration
  def change
    remove_column :articles, :chicken_beef
  end
end
