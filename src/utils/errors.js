class BaseError extends Error {
  constructor (message, name = 'Error', httpStatus = 400) {
    super()
    this.message = message
    this.name = name
    this.httpStatus = httpStatus
  }

  getHttpStatus () {
    return this.httpStatus
  }
}
module.exports.BaseError = BaseError

class ValidationError extends BaseError {
  constructor () {
    super('Validation error!', 'ValidationError', 400)
  }
}
module.exports.ValidationError = ValidationError

class EmailAddressValidationError extends BaseError {
  constructor (message) {
    super(message, 'ValidationError', 400)
  }
}
module.exports.EmailAddressValidationError = EmailAddressValidationError

class AlreadyAuthenticatedError extends BaseError {
  constructor () {
    super('Already authenticated!', 'AlreadyAuthenticatedError', 400)
  }
}
module.exports.AlreadyAuthenticatedError = AlreadyAuthenticatedError

class InvalidSupervisorCredentialsError extends BaseError {
  constructor () {
    super('Invalid username or password!', 'InvalidSupervisorCredentialsError', 400)
  }
}
module.exports.InvalidSupervisorCredentialsError = InvalidSupervisorCredentialsError

class SupervisorNotFoundError extends BaseError {
  constructor () {
    super('Supervisor not found!', 'SupervisorNotFoundError', 400)
  }
}
module.exports.SupervisorNotFoundError = SupervisorNotFoundError

class SupervisorUsernameTakenError extends BaseError {
  constructor () {
    super('Supervisor already exists!', 'SupervisorUsernameTakenError', 400)
  }
}
module.exports.SupervisorUsernameTakenError = SupervisorUsernameTakenError

class SupervisorEmailTakenError extends BaseError {
  constructor () {
    super('Supervisor with this email already exists!', 'SupervisorEmailTakenError', 400)
  }
}
module.exports.SupervisorEmailTakenError = SupervisorEmailTakenError

class NotAuthenticatedError extends BaseError {
  constructor () {
    super('Not authenticated', 'NotAuthenticatedError', 400)
  }
}
module.exports.NotAuthenticatedError = NotAuthenticatedError

class UnknownIdentityError extends BaseError {
  constructor () {
    super('Unknown identity!', 'UnknownIdentityError', 400)
  }
}
module.exports.UnknownIdentityError = UnknownIdentityError

class InvalidVerificationURLError extends BaseError {
  constructor () {
    super('Invalid verification URL!', 'InvalidVerificationURLError', 400)
  }
}
module.exports.InvalidVerificationURLError = InvalidVerificationURLError

class InternalError extends BaseError {
  constructor () {
    super('Internal error! Please try again later.', 'InternalError', 500)
  }
}
module.exports.InternalError = InternalError

class TeamNotFoundError extends BaseError {
  constructor () {
    super('Team not found!', 'TeamNotFoundError', 400)
  }
}
module.exports.TeamNotFoundError = TeamNotFoundError

class InvalidTeamPasswordError extends BaseError {
  constructor () {
    super('Wrong password!', 'InvalidTeamPasswordError', 400)
  }
}
module.exports.InvalidTeamPasswordError = InvalidTeamPasswordError

class EmailConfirmedError extends BaseError {
  constructor () {
    super('Email already confirmed!', 'EmailConfirmedError', 400)
  }
}
module.exports.EmailConfirmedError = EmailConfirmedError

class EmailTakenError extends BaseError {
  constructor () {
    super('Email already taken by another team!', 'EmailTakenError', 400)
  }
}
module.exports.EmailTakenError = EmailTakenError

class InvalidTeamCredentialsError extends BaseError {
  constructor () {
    super('Invalid team name or password!', 'InvalidTeamCredentialsError', 400)
  }
}
module.exports.InvalidTeamCredentialsError = InvalidTeamCredentialsError

class InvalidImageError extends BaseError {
  constructor () {
    super('Invalid image!', 'InvalidImageError', 400)
  }
}
module.exports.InvalidImageError = InvalidImageError

class ImageDimensionsError extends BaseError {
  constructor () {
    super('Image dimensions should be greater than or equal 48px!', 'ImageDimensionsError', 400)
  }
}
module.exports.ImageDimensionsError = ImageDimensionsError

class ImageAspectRatioError extends BaseError {
  constructor () {
    super('Image width should equal image height!', 'ImageAspectRatioError', 400)
  }
}
module.exports.ImageAspectRatioError = ImageAspectRatioError

class TeamCredentialsTakenError extends BaseError {
  constructor () {
    super('Specified credentials (team name and/or email) already taken!', 'TeamCredentialsTakenError', 400)
  }
}
module.exports.TeamCredentialsTakenError = TeamCredentialsTakenError

class PostNotFoundError extends BaseError {
  constructor () {
    super('Post not found!', 'PostNotFoundError', 400)
  }
}
module.exports.PostNotFoundError = PostNotFoundError

class DuplicatePostTitleError extends BaseError {
  constructor () {
    super('Post title should be unique!', 'DuplicatePostTitleError', 400)
  }
}
module.exports.DuplicatePostTitleError = DuplicatePostTitleError

class InvalidCSRFTokenError extends BaseError {
  constructor () {
    super('CSRF-protection token is invalid or has expired! Please reload the page.', 'InvalidCSRFTokenError', 400)
  }
}
module.exports.InvalidCSRFTokenError = InvalidCSRFTokenError

class ContestNotInitializedError extends BaseError {
  constructor () {
    super('Contest not initialized!', 'ContestNotInitializedError', 400)
  }
}
module.exports.ContestNotInitializedError = ContestNotInitializedError

class CategoryNotFoundError extends BaseError {
  constructor () {
    super('Category not found!', 'CategoryNotFoundError', 400)
  }
}
module.exports.CategoryNotFoundError = CategoryNotFoundError

class DuplicateCategoryTitleError extends BaseError {
  constructor () {
    super('Category title should be unique!', 'DuplicateCategoryTitleError', 400)
  }
}
module.exports.DuplicateCategoryTitleError = DuplicateCategoryTitleError

class ContestFinishedError extends BaseError {
  constructor () {
    super('Contest has finished!', 'ContestFinishedError', 400)
  }
}
module.exports.ContestFinishedError = ContestFinishedError

class DuplicateTaskTitleError extends BaseError {
  constructor () {
    super('Task title should be unique!', 'DuplicateTaskTitleError', 400)
  }
}
module.exports.DuplicateTaskTitleError = DuplicateTaskTitleError

class TaskNotFoundError extends BaseError {
  constructor () {
    super('Task not found!', 'TaskNotFoundError', 400)
  }
}
module.exports.TaskNotFoundError = TaskNotFoundError

class ContestNotFoundError extends BaseError {
  constructor () {
    super('Contest not found!', 'ContestNotFoundError', 400)
  }
}
module.exports.ContestNotFoundError = ContestNotFoundError

class WrongTaskAnswerError extends BaseError {
  constructor () {
    super('Wrong answer!', 'WrongTaskAnswerError', 400)
  }
}
module.exports.WrongTaskAnswerError = WrongTaskAnswerError

class ContestNotStartedError extends BaseError {
  constructor () {
    super('Contest has not started or has already finished!', 'ContestNotStartedError', 400)
  }
}
module.exports.ContestNotStartedError = ContestNotStartedError

class ContestPausedError extends BaseError {
  constructor () {
    super('Contest has been paused!', 'ContestPausedError', 400)
  }
}
module.exports.ContestPausedError = ContestPausedError

class TaskAlreadyOpenedError extends BaseError {
  constructor () {
    super('Task has been already opened!', 'TaskAlreadyOpenedError', 400)
  }
}
module.exports.TaskAlreadyOpenedError = TaskAlreadyOpenedError

class TaskClosedError extends BaseError {
  constructor () {
    super('Task has been closed!', 'TaskClosedError', 400)
  }
}
module.exports.TaskClosedError = TaskClosedError

class TaskNotOpenedError extends BaseError {
  constructor () {
    super('Task is not opened now!', 'TaskNotOpenedError', 400)
  }
}
module.exports.TaskNotOpenedError = TaskNotOpenedError

class TaskAlreadyClosedError extends BaseError {
  constructor () {
    super('Task has been already closed!', 'TaskAlreadyClosedError', 400)
  }
}
module.exports.TaskAlreadyClosedError = TaskAlreadyClosedError

class TaskAlreadySolvedError extends BaseError {
  constructor () {
    super('Task has been already solved by your team!', 'TaskAlreadySolvedError', 400)
  }
}
module.exports.TaskAlreadySolvedError = TaskAlreadySolvedError

class CategoryAttachedError extends BaseError {
  constructor () {
    super('Category is attached to one or more tasks!', 'CategoryAttachedError', 400)
  }
}
module.exports.CategoryAttachedError = CategoryAttachedError

class TaskSubmitAttemptsLimitError extends BaseError {
  constructor () {
    super('Too many submit attempts!', 'TaskSubmitAttemptsLimitError', 400)
  }
}
module.exports.TaskSubmitAttemptsLimitError = TaskSubmitAttemptsLimitError

class EmailNotConfirmedError extends BaseError {
  constructor () {
    super('You should confirm your email before you can submit an answer to the task', 'EmailNotConfirmedError', 400)
  }
}
module.exports.EmailNotConfirmedError = EmailNotConfirmedError

class TeamNotQualifiedError extends BaseError {
  constructor () {
    super('Team has not qualified for the event!', 'TeamNotQualifiedError', 400)
  }
}
module.exports.TeamNotQualifiedError = TeamNotQualifiedError

class InvalidResetPasswordURLError extends BaseError {
  constructor () {
    super('Reset password URL is invalid or has expired!', 'InvalidResetPasswordURLError', 400)
  }
}
module.exports.InvalidResetPasswordURLError = InvalidResetPasswordURLError

class ResetPasswordAttemptsLimitError extends BaseError {
  constructor () {
    super('Too many reset password attempts! Please wait some time before requesting a password reset again.', 'ResetPasswordAttemptsLimitError', 400)
  }
}
module.exports.ResetPasswordAttemptsLimitError = ResetPasswordAttemptsLimitError

class EmailVerificationAttemptsLimitError extends BaseError {
  constructor () {
    super('Too many email verification attempts! Please wait some time before requesting a confirmation email again.', 'EmailVerificationAttemptsLimitError', 400)
  }
}
module.exports.EmailVerificationAttemptsLimitError = EmailVerificationAttemptsLimitError

class InvalidStateTransitionError extends BaseError {
  constructor () {
    super('Invalid state transition!', 'InvalidStateTransitionError', 400)
  }
}
module.exports.InvalidStateTransitionError = InvalidStateTransitionError

class TaskNotAvailableError extends BaseError {
  constructor () {
    super('Task is not available!', 'TaskNotAvailableError', 400)
  }
}
module.exports.TaskNotAvailableError = TaskNotAvailableError

class TaskReviewNotEligibleError extends BaseError {
  constructor () {
    super("Your team hasn't solved the task so you can't submit the review!", 'TaskReviewNotEligibleError', 400)
  }
}
module.exports.TaskReviewNotEligibleError = TaskReviewNotEligibleError

class TaskReviewAlreadyGivenError extends BaseError {
  constructor () {
    super('Your team has already given a review!', 'TaskReviewAlreadyGivenError', 400)
  }
}
module.exports.TaskReviewAlreadyGivenError = TaskReviewAlreadyGivenError

class DuplicateRemoteCheckerNameError extends BaseError {
  constructor () {
    super('Remote checker name must be unique!', 'DuplicateRemoteCheckerNameError', 400)
  }
}
module.exports.DuplicateRemoteCheckerNameError = DuplicateRemoteCheckerNameError

class RemoteCheckerNotFoundError extends BaseError {
  constructor () {
    super('Remote checker not found!', 'RemoteCheckerNotFoundError', 400)
  }
}
module.exports.RemoteCheckerNotFoundError = RemoteCheckerNotFoundError

class RemoteCheckerAttachedError extends BaseError {
  constructor () {
    super('Remote checker is attached to a task!', 'RemoteCheckerAttachedError', 400)
  }
}
module.exports.RemoteCheckerAttachedError = RemoteCheckerAttachedError

class TaskRemoteCheckerNotFoundError extends BaseError {
  constructor () {
    super('Task remote checker not found!', 'TaskRemoteCheckerNotFoundError', 400)
  }
}
module.exports.TaskRemoteCheckerNotFoundError = TaskRemoteCheckerNotFoundError

class RemoteCheckerUnavailableError extends BaseError {
  constructor () {
    super('Remote checker is unavailable at the moment! Please try again later', 'RemoteCheckerUnavailableError', 400)
  }
}
module.exports.RemoteCheckerUnavailableError = RemoteCheckerUnavailableError

class TemplateNotRegisteredError extends BaseError {
  constructor (message) {
    super(message, 'TemplateNotRegisteredError', 500)
  }
}
module.exports.TemplateNotRegisteredError = TemplateNotRegisteredError

class TaskValueNotFoundError extends BaseError {
  constructor () {
    super('Task value not found!', 'TaskValueNotFoundError', 400)
  }
}
module.exports.TaskValueNotFoundError = TaskValueNotFoundError

class TaskRewardSchemeNotFoundError extends BaseError {
  constructor () {
    super('Task reward scheme not found!', 'TaskRewardSchemeNotFoundError', 400)
  }
}
module.exports.TaskRewardSchemeNotFoundError = TaskRewardSchemeNotFoundError

class DuplicateTaskFilenameError extends BaseError {
  constructor () {
    super('Task filename should be unique!', 'DuplicateTaskFilenameError', 400)
  }
}
module.exports.DuplicateTaskFilenameError = DuplicateTaskFilenameError

class TaskFileNotFoundError extends BaseError {
  constructor () {
    super('Task file not found!', 'TaskFileNotFoundError', 400)
  }
}
module.exports.TaskFileNotFoundError = TaskFileNotFoundError

class SupervisorInvitationLimitError extends BaseError {
  constructor () {
    super('Too many supervisor invitations!', 'SupervisorInvitationLimitError', 400)
  }
}
module.exports.SupervisorInvitationLimitError = SupervisorInvitationLimitError

class InvalidCreateSupervisorURLError extends BaseError {
  constructor () {
    super('URL is invalid or has expired!', 'InvalidCreateSupervisorURLError', 400)
  }
}
module.exports.InvalidCreateSupervisorURLError = InvalidCreateSupervisorURLError

class SupervisorTaskSubscriptionAlreadyExistsError extends BaseError {
  constructor () {
    super('Subscription already created!', 'SupervisorTaskSubscriptionAlreadyExistsError', 400)
  }
}
module.exports.SupervisorTaskSubscriptionAlreadyExistsError = SupervisorTaskSubscriptionAlreadyExistsError

class SupervisorTaskSubscriptionNotFoundError extends BaseError {
  constructor () {
    super('Subscription not found!', 'SupervisorTaskSubscriptionNotFoundError', 400)
  }
}
module.exports.SupervisorTaskSubscriptionNotFoundError = SupervisorTaskSubscriptionNotFoundError

class TaskReviewNotFoundError extends BaseError {
  constructor () {
    super('Task review not found!', 'TaskReviewNotFoundError', 400)
  }
}
module.exports.TaskReviewNotFoundError = TaskReviewNotFoundError

class InvalidAWSSignatureError extends BaseError {
  constructor () {
    super('AWS Signature is invalid', 'InvalidAWSSignatureError', 400)
  }
}
module.exports.InvalidAWSSignatureError = InvalidAWSSignatureError

class InvalidCTFtimeOAuthStateError extends BaseError {
  constructor () {
    super('OAuth state is invalid', 'InvalidCTFtimeOAuthStateError', 400)
  }
}
module.exports.InvalidCTFtimeOAuthStateError = InvalidCTFtimeOAuthStateError

class CTFtimeProfileEmailMismatchError extends BaseError {
  constructor () {
    super('Your CTFtime.org account email differs from the one specified in your team profile', 'CTFtimeProfileEmailMismatchError', 400)
  }
}
module.exports.CTFtimeProfileEmailMismatchError = CTFtimeProfileEmailMismatchError

class CTFtimeProfileTeamMismatchError extends BaseError {
  constructor () {
    super('Your CTFtime.org team name differs from the one specified in your team profile. Login on behalf of another team or create an alias for the existing one.', 'CTFtimeProfileTeamMismatchError', 400)
  }
}
module.exports.CTFtimeProfileTeamMismatchError = CTFtimeProfileTeamMismatchError

class CTFtimeProfileAlreadyLinkedError extends BaseError {
  constructor () {
    super('CTFtime.org account is already associated with another team', 'CTFtimeProfileAlreadyLinkedError', 400)
  }
}
module.exports.CTFtimeProfileAlreadyLinkedError = CTFtimeProfileAlreadyLinkedError
