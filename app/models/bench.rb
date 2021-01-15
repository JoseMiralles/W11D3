class Bench < ApplicationRecord

    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        return self.find_by_sql(
            "SELECT * FROM benches
            WHERE lat >= #{bounds[:southWest][:lat]}
            AND lat <= #{bounds[:northEast][:lat]}
            AND lng >= #{bounds[:southWest][:lng]}
            AND lng <= #{bounds[:northEast][:lng]}"
        );
    end

end