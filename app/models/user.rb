class User < ApplicationRecord

    attr_reader :password

    validates :username, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50, minimum: 4}
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    def self.find_by_credentials( username, password )
        user = User.find_by(username: username);
        if user
            return user.is_password?(password) ? user : nil
        end
        return nil
    end

    def is_password?(password)
        return BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        return self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        return self.session_token
    end

end
