export const IdsConstant = {
  components: {
    task: (index = '') => ({
      commentsLabel: (id = 'commentsLabelTaskId') =>`${id}${index}`,
      comments: (id = `commentsTaskId`) => `${id}${index}`,
      completedBefore: (id = `completedBeforeTaskId`) => `${id}${index}`,
      completedBeforeLabel: (id = `completedBeforeLabeTasklId`) => `${id}${index}`,
      completedTimeLabel: (id = `completedTimeLabeTasklId`) => `${id}${index}`,
      completedTime: (id = `completedTimeTasklId`) => `${id}${index}`,
      completedByLabel: (id = `completedByLabeTasklId`) => `${id}${index}`,
      completedBy: (id = `completedByTaskId`) => `${id}${index}`,
      description: (id = `descriptionTaskId`) => `${id}${index}`,
      statusLabel: (id = `statusLabelTaskId`) => `${id}${index}`,
      status: (id = `statusTasklId`) => `${id}${index}`,
      statusAction: (id = `statusTasklId`) => `${id}${index}`,
      submitBtn: (id = `submitBtnTaskId`) => `${id}${index}`,
      updateStatus: (id = `updateStatusTaskId`) => `${id}${index}`,
    })
  }
}
